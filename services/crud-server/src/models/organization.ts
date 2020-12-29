// import { IOrganization } from '../../../../src/components/organization/IOrganization';
// import { callbackify } from 'util';
// import { deserialize } from 'v8';

import dotenv from 'dotenv';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
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
                console.log(result);
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

  
    update: async ( Organization:IOrganization) => {

        return;

    },

    create: async( Organization:IOrganization) => {
            connection.query(`INSERT INTO organization (ord_id, org_title, org_price, orgType_id) VALUES ('${Organization.ord_id}', '${Organization.org_title}',${Organization.org_price}, '${Organization.orgType_id}')`,
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