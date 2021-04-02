// import { IOrganization } from '../../../../src/components/organization/IOrganization';
// import { callbackify } from 'util';
// import { deserialize } from 'v8';
import {IUser} from './user'

import dotenv from 'dotenv';
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
    // organization_status: boolean;

}



export const OrganizationModel = {

    getAll: ():Promise<IOrganization[]> => {
        return new Promise((resolve, reject) => {connection.query('SELECT * FROM organization', function(err:any, result:any){
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
            connection.query(`SELECT o.ord_id, user_userName FROM organization o JOIN organization_has_user ou ON o.ord_id = ou.ord_id
            JOIN user ON ou.user_id = user.user_id`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

  
    update: async ( Organization:IOrganization) => {

        return;

    },

    create: async( Organization:IOrganization) => {
            if(Organization.org_price > 0){
                Organization.orgType_id = 2
            } else {
                Organization.orgType_id = 1
            }
            connection.query(`INSERT INTO organization (org_title, org_price, orgType_id) VALUES ('${Organization.org_title}',${Organization.org_price}, '${Organization.orgType_id}')`,
            function(err:any, result:any){
                if(err)
                {
                    throw err;
                } else {
                    result;
                }
            });
    },

    delete: async ( organization:IOrganization ) => {

        return;
    }

}