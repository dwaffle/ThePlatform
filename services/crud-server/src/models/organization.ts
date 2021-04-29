// import { IOrganization } from '../../../../src/components/organization/IOrganization';
// import { callbackify } from 'util';
// import { deserialize } from 'v8';
import {IUser} from './user'

import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})



// //Id and date of creation are generated for us by the SQL query.
// export interface IOrganization {
//     organization_id: number;
//     organization_title: string;
//     organization_price: number;
//     organization_type: number;
//     // organization_status: boolean;

// }

//Id and date of creation are generated for us by the SQL query.
export interface IOrganization {
    ord_id: number;
    org_title: string;
    org_price: number;
    orgType_id: number;
    org_desc:string;
    org_status?:number;
    user_id:number;
    // organization_status: boolean;
}

export interface IOrgModificationRequest{
    ord_id:number
    user_id:number
    user_role:number
    addUser:boolean
}

export interface IOrgUpdatedRequest{
    ord_id:number
    org_status:number
}



export const OrganizationModel = {

    getAll: ():Promise<IOrganization[]> => {
        return new Promise((resolve, reject) => {connection.query('select * from organization ORDER BY org_status DESC, org_title ASC', function(err:any, result:any){
            if(err){
                reject(err);
            } else {
                resolve(result);
            }
        })
    })
    },

    getById: async ( organizationId:number ): Promise<IOrganization[]> => {
        return new Promise((resolve, reject) => {
            
            connection.query(`SELECT * FROM organization WHERE ord_id = ${organizationId}`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    getOrgUsers: async( orgId:number): Promise<IUser[]> => {
        return new Promise((resolve, reject) =>{
            connection.query(`SELECT user.user_id, o.ord_id, user_userName, user_role FROM organization o JOIN organization_has_user ou ON o.ord_id = ou.ord_id
            JOIN user ON ou.user_id = user.user_id`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    addOrRemoveUser: async(userModification:IOrgModificationRequest): Promise<any> => {
        if(userModification.addUser){
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO organization_has_user VALUES (${userModification.ord_id}, ${userModification.user_id}, ${userModification.user_role})`, function(err:any, result:any){
                if(err){
                    throw err
                } else {
                    result
                }
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM organization_has_user WHERE ord_id = ${userModification.ord_id} AND user_id = ${userModification.user_id}`, function(err:any, result:any){
                if(err){
                    throw err
                } else {
                    result
                }
            })
        })
    }
    },

    changeUserRole: async(request:IOrgModificationRequest) => {
        connection.query(`UPDATE organization_has_user SET user_role = ${request.user_role} WHERE ord_id = ${request.ord_id} AND user_id = ${request.user_id}`, 
        function (err: any, result:any){
            if(err){
                throw err
            } else {
                result
            }
        })
    },

    update: async ( Organization:IOrgUpdatedRequest) => {

        // var connection = await myConnection.getClient()
        return new Promise<any>((resolve, reject) => {
            console.log(`UPDATE organization SET org_status = ${Organization.org_status} WHERE ord_id = ${Organization.ord_id}`)
            connection.query(`UPDATE organization SET org_status = ${Organization.org_status} WHERE ord_id = ${Organization.ord_id}`, 
            function(err:any, result:any){
                if(err){
                    throw err
                } else {
                    result
                }
            })
        })

    },

    create: async( Organization:IOrganization) => {
            if(Organization.org_price > 0){
                Organization.orgType_id = 2
            } else {
                Organization.orgType_id = 1
            }
            connection.query(`INSERT INTO organization (org_title, org_price, orgType_id, org_desc) VALUES ('${Organization.org_title}',${Organization.org_price}, ${Organization.orgType_id}, '${Organization.org_desc}')`,
            function(err:any, result:any){
                if(err)
                {
                    throw err;
                } else {
                    result;
                }
            });
            connection.query(`SELECT * FROM organization ORDER BY ord_id desc LIMIT 1`, function(err:any, result:any){
                if(err)
                {
                    throw err;
                } else {
                    const id:IOrganization = result[0].ord_id;
                    connection.query(`INSERT INTO organization_has_user VALUES (${id}, ${Organization.user_id}, 1)`)
                }
            });
    },

    delete: async ( org_id:number ) => {
        //Delete both the organization and the users in it.
        connection.query(`DELETE FROM organization_has_user WHERE ord_id = ${org_id}`, function (err:any, result:any){
            if(err){
                throw err;
            } else {
                result;
            }
        })
        connection.query(`DELETE FROM organization WHERE ord_id = ${org_id}`, function (err:any, result:any){
            if(err){
                throw err;
            } else {
                result
            }
        })
        
    }
}