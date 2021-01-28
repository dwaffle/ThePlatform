import dotenv from 'dotenv';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})


// let _sql: string = "";

//Id and date of creation are generated for us by the SQL query.
export interface IRating {
                rate_id: number;
                rate_title: string;
                rate_user_id: number;
                rate_article_id: number;
                rate_value: number;
                rate_review: string;
                rate_date: string;
                // rate_series_id?:number
}

// this model to rate the article 
export const RatingModel = {

    getAll: ():Promise<IRating[]> => {
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

    // getById: async ( rateId:number ): Promise<any> => {
    //     return new Promise((resolve, reject) => {

    //         _sql = `SELECT * from rating WHERE rate_id = ${rateId}`;

    //         connection.query(_sql, function(err:any, result: any){
    //             if(err){
    //                 reject(err);
    //             } else {
    //                 resolve(result);
    //             }
    //         })
    //     })
    // },

                                                        // rate_id: number;
                                                        // rate_title: string;
                                                        // rate_user_id: number;
                                                        // rate_article_id: number;
                                                        // rate_value: number;
                                                        // rate_date;string;
                                                        // rate_review: string;
    // newRate: async( newRate:IRating) => {

    //         _sql = `INSERT INTO rating 
    //                 ( rate_id, rate_title, rate_date, rate_user_id, rate_article_id, rate_value, rate_review ) 
    //                 VALUES 
    //                 ('${newRate.rate_id}', '${newRate.rate_title}', SYSDATE(),
    //                  '${newRate.rate_user_id}', '${newRate.rate_article_id}',
    //                  '${newRate.rate_value}', '${newRate.rate_review}')`

    //         connection.query(_sql,function(err:any, result:any){
    //             if(err)
    //             {
    //                 throw err;
    //             } else {
    //                 result;
    //             }
    //         });
    // },
}
