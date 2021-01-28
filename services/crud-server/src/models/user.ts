import fs from 'fs';
import dotenv from 'dotenv';
import { reject } from 'lodash';
import { resolve } from 'path';
dotenv.config();

interface IprofileChangeRequest {
    user_id: number,
    user_firstName?: string;
    user_lastName?: string;
    user_email?: string;
    user_password?: string
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
    user_creation_date:string
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

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
})

// read user
const path = `${__dirname}/../data`;
const file = `${path}/users.json`;

if(!fs.existsSync(path)){
    fs.mkdirSync(path);
}

if(!fs.existsSync(file)){
    fs.writeFileSync(file, JSON.stringify([]), { encoding: 'utf-8' });
}




export const UserModel = {

    getAll: ():Promise<IUser[]> => {
        return new Promise((resolve, reject) => {connection.query('SELECT * FROM user', function(err:any, result:any){
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
        connection.query(`INSERT INTO user (user_type, user_userName, user_firstName, user_lastName, user_password, user_email, user_creation_date )VALUES (2, '${user.user_userName}', '${user.user_firstName}', '${user.user_lastName}', '${user.user_password}', '${user.user_email}', SYSDATE())`),
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
        //Take out the final ", " before actually sending the query
        queryParams = queryParams.slice(0, -2)
        connection.query(`UPDATE user SET ${queryParams} WHERE user_id = ${userInfo.user_id}`, function(err:any, result:any){
                if(err){
                    reject(err);
                }
            })
    }
}