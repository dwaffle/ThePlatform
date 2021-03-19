import dotenv from 'dotenv';
import { assignWith } from 'lodash';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})


// import { MysqlConnection } from '../connection'

// var connection =  new MysqlConnection();

let _sql: string = "";

// console.log("test ..... \n ",test);

// console.log("connect ..... \n ",connection);

//Id and date of creation are generated for us by the SQL query.
export interface IRating {
                rating_id?: number;
                rating_title: string;
                rating_value: number;
                rating_review: string;
                rating_date?: string;
                rating_user_id: number;
                user_userName?:string;
                rating_article_id: number;
                art_title?:string;
 
                // rate_series_id?:number
}

// this model to rate the article 
export const RatingModel = {


    getByArticleId: async ( rateId:number ): Promise<any> => {
        // const myConnection =  await connection
        return new Promise((resolve, reject) => {

            // _sql = `SELECT  * FROM rating rat INNER JOIN article art ON rat.article_art_id = art.art_id JOIN user usr ON rat.user_user_id = usr.user_id
            // WHERE art.art_id = ${rateId}`;

            _sql = `SELECT  * FROM rating WHERE art_id = ${rateId}`;


            connection.query(_sql, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },


    getAll: async ():Promise<IRating[]> => {
        // const myConnection =  await connection.getClient();
        return new Promise((resolve, reject) => {connection.query('SELECT * from rating', function(err:any, result:any){
            if(err){
                reject(err);
            } else {
                console.log(result);
                resolve(result);
            }
        })
    })
    },
    
                                                        // rate_id: number;
                                                        // rate_title: string;
                                                        // rate_user_id: number;
                                                        // rate_article_id: number;
                                                        // rate_value: number;
                                                        // rate_date;string;
                                                        // rate_review: string;
    newRate: async( newRate:IRating) => {

            _sql = `INSERT INTO rating 
                    ( rate_title, rate_date, rate_user_id, rate_article_id, rate_value, rate_review ) 
                    VALUES 
                    ('${newRate.rating_title}', SYSDATE(),
                     '${newRate.rating_user_id}', '${newRate.rating_article_id}',
                     '${newRate.rating_value}', '${newRate.rating_review}')`

            connection.query(_sql,function(err:any, result:any){
                if(err)
                {
                    throw err;
                } else {
                    result;
                }
            });
    },
}
