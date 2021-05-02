import dotenv from 'dotenv';

dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})


let _sql: string = "";

export interface IRating {
    rating_id?: number;
    rating_title: string;
    rating_value: number;
    rating_review: string;
    rating_date?: string;
    user_user_id: number;
    article_art_id: number;
  
}


export const RatingModel = {


    getRating: async (  ): Promise<IRating[]> => {
        // const myConnection =  await connection
        return new Promise((resolve, reject) => {

            // _sql = `SELECT  * FROM rating rat INNER JOIN article art ON rat.article_art_id = art.art_id JOIN user usr ON rat.user_user_id = usr.user_id
            // WHERE art.art_id = ${rateId}`;

            _sql = `SELECT  * FROM rating`;

            // console.log("Im here getRating")
            connection.query(_sql, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },


    getById: async ( articleId:number ): Promise<any> => {
        // var connection = await myConnection.getClient()
        return new Promise((resolve, reject) => {

            _sql = `SELECT  * FROM rating WHERE article_art_id = ${articleId}`;

            connection.query(_sql, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },


    newRate: async( newRate:IRating) => {

        _sql = `INSERT INTO rating 
                ( rating_title, rating_date, user_user_id, article_art_id, rating_value, rating_review ) 
                VALUES 
                ('${newRate.rating_title}', SYSDATE(),
                '${newRate.user_user_id}', '${newRate.article_art_id}',
                '${newRate.rating_value}', '${newRate.rating_review}')`
        // console.log(_sql)

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
