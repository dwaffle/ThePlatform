import dotenv from 'dotenv';

//get the connection parameters
dotenv.config();

//Connection to the database 
// Using default parameters from dotenv.config
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})


//sql blank variable
let _sql: string = "";

//the rating interface
export interface IRating {
    rating_id?: number;
    rating_title: string;
    rating_value: number;
    rating_review: string;
    rating_date?: string;
    user_user_id: number;
    article_art_id: number;
  
}

//the rating model 
// getRating, getById, newRate
export const RatingModel = {

    // get all the articles 
    getRating: async (  ): Promise<IRating[]> => {

        //waiting for data base return
        return new Promise((resolve, reject) => {

            //Prepare the sql
            _sql = `SELECT  * FROM rating`;

            //get article rating from database or throw error
            connection.query(_sql, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    // get rating depending on rating article id
    getById: async ( articleId:number ): Promise<any> => {
    
        //waiting for data base return
        return new Promise((resolve, reject) => {

            //Prepare the sql to parse
            _sql = `SELECT  * FROM rating WHERE article_art_id = ${articleId}`;

            //get article rating from database or throw error
            connection.query(_sql, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    //Parse new rating to data base or throw error
    newRate: async( newRate:IRating) => {

         //Prepare the sql
        _sql = `INSERT INTO rating 
                ( rating_title, rating_date, user_user_id, article_art_id, rating_value, rating_review ) 
                VALUES 
                ( ?, SYSDATE(), ?, ?, ?, ?)`

        //Post article rating in database or throw error      
        connection.query(_sql, [newRate.rating_title, 
                                newRate.user_user_id, 
                                newRate.article_art_id,
                                newRate.rating_value,
                                newRate.rating_review ] 
                        , function(err:any, result:any){
                            if(err)
                            {
                                throw err;
                            } else {
                                result;
                            }
                        });
    },
}
