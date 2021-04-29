import fs from 'fs';
import dotenv from 'dotenv';
import { reject } from 'lodash';
import { resolve } from 'path';
dotenv.config();

interface IprofileChangeRequest {
    user_id: number,
    user_firstName?: string
    user_lastName?: string
    user_email?: string
    user_password?: string
    user_twitter?:string
    user_facebook?:string
    user_instagram?:string
}

export interface IUser {
    user_id:number,
    user_type:number,
    payout_id:number,
    user_userName:string,
    user_firstName:string,
    user_lastName:string,
    user_password:string,
    user_email:string,
    user_creation_date:string,
    user_facebook?:string,
    user_twitter?:string,
    user_instagram?:string
}

export interface IUserNoPassword {
    user_id:number,
    user_type:number,
    payout_id:number,
    user_userName:string,
    user_firstName:string,
    user_lastName:string,
    user_email:string,
    user_creation_date:string
}

export interface IUserAdmin {
    user_id:number,
    user_userName:string,
    user_firstName:string,
    user_lastName:string,
    user_creation_date:string
    user_status:number
}


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})



export const UserModel = {

    getAll: ():Promise<IUser[]> => {
        return new Promise((resolve, reject) => {connection.query('SELECT * FROM user ORDER BY user_status DESC, user_firstName ASC', function(err:any, result:any){
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
    },

    getAllAdmin: ():Promise<IUser[]> => {
        return new Promise((resolve, reject) => {connection.query('SELECT user_id, user_userName, user_firstName, user_lastName, user_creation_date, user_status FROM user', function(err:any, result:any){
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
    },

    getAllWithoutPassword: ():any => {
        return new Promise<any>((resolve, reject) => {connection.query('SELECT user_id, user_type, payout_id, user_userName, user_firstName, user_lastName, user_email, user_creation_date FROM user')
    , function(err:any, result:any){
            if(err){
                reject(err)
            } else {
                resolve(result);
            }
        }
    })
    },

    setAll: async (user:IUser) => {
        //Because I know I have some parameters in the query, the commas can come before the optinal paramaters.
        let extraParams = ""
        let extraValues = ""
        if(user.user_twitter){
            extraParams += `, user_twitter`
            extraValues += `, '${user.user_twitter}'`
        }
        if(user.user_facebook){
            extraParams += `, user_facebook`
            extraValues += `, '${user.user_facebook}'`
        }
        if(user.user_instagram){
            extraParams += ", user_instagram"
            extraValues += `, '${user.user_instagram}'`
        }
        connection.query(`INSERT INTO user (user_type, user_userName, user_firstName, user_lastName, user_password, user_email, user_creation_date ${extraParams} )VALUES (2, '${user.user_userName}', '${user.user_firstName}', '${user.user_lastName}', '${user.user_password}', '${user.user_email}', SYSDATE() ${extraValues})`),
        function(err:any, result:any){
            if(err){
                reject(err)
            } else {
                resolve(result)
            }
        }
    },

    getByUsername: async ( username:string ):Promise<IUser> => {
        return new Promise<IUser>((resolve, reject) => {
            
            connection.query(`SELECT * FROM user WHERE user_userName = '${username}'`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            })
        })
      
    },

    delete: async (userId:number) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM user WHERE user_id = ${userId}`, function(err:any, result:any){
                if(err){
                    reject(err)
                } else {
                    resolve(result);
                }
            })
        })
    },

    update: async ( Member:IUserAdmin) => {

        // var connection = await myConnection.getClient()
        return new Promise<any>((resolve, reject) => {
            console.log(`UPDATE user SET user_status = ${Member.user_status} WHERE user_id = ${Member.user_id}`)
            connection.query(`UPDATE user SET user_status = ${Member.user_status} WHERE user_id = ${Member.user_id}`, 
            function(err:any, result:any){
                if(err){
                    throw err
                } else {
                    result
                }
            })
        })

    },

    patch: async(userInfo:IprofileChangeRequest) => {
        let queryParams = "";
        //Double check that a user id has come in with the user info.
        if(!userInfo.user_id){
            console.log("No user id")
            return
        }
        //Need to figure out which items, and therefore how to structure the query.
        if(userInfo.user_email){
            queryParams += `user_email = '${userInfo.user_email}', `
        }
        if(userInfo.user_firstName){
            queryParams += `user_firstName = '${userInfo.user_firstName}', ` 
        }
        if(userInfo.user_lastName){
            queryParams += `user_lastName = '${userInfo.user_lastName}', `
        }
        if(userInfo.user_password){
            queryParams += `user_password = '${userInfo.user_password}', `
        }
        if(userInfo.user_twitter){
            queryParams += `user_twitter = '${userInfo.user_twitter}', `
        }
        if(userInfo.user_facebook){
            queryParams += `user_facebook = '${userInfo.user_facebook}', `
        }
        if(userInfo.user_instagram){
            queryParams += `user_instagram = '${userInfo.user_instagram}', `
        }
        //Take out the final ", " before actually sending the query
        queryParams = queryParams.slice(0, -2)
        connection.query(`UPDATE user SET ${queryParams} WHERE user_id = ${userInfo.user_id}`, function(err:any, result:any){
                if(err){
                    reject(err);
                }
            })
    }
}