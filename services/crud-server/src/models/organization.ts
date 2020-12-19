//To be replaced with the code for retriving an article.
import dotenv from 'dotenv';
import { callbackify } from 'util';
import { deserialize } from 'v8';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
})


//Id and date of creation are generated for us by the SQL query.
export interface IOrganization {
    organization_id: number;
    organization_title: string;
    organization_price: number;
    organization_type: number;
    // organization_status: boolean;

}

export const OrganizationModel = {

    getAll: async ():Promise<any> => {
        return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM organization', function(err:any, result:any){
                    if(err){
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
},

    getById: async ( OrganizationId:number ): Promise<any> => {
        return new Promise((resolve, reject) => {
            
            connection.query(`SELECT * FROM organization WHERE article_id = ${OrganizationId}`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

  
    update: async ( organization:IOrganization) => {

        return;

    },

    create: async( organization:IOrganization) => {
            connection.query(`INSERT INTO organization (ord_id, org_title, org_price, orgType_id) VALUES ('${organization.organization_id}', '${organization.organization_title}',${organization.organization_price}, '${organization.organization_type}')`,
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