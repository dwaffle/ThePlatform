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
export interface IArticle {
    price: number,
    author: number,
    type: number,
    body: string
}
    

type IArticleStringId = Omit<IArticle, "_id"> & { _id: number };

export const ArticleModel = {

    getAll: async ():Promise<any> => {
        return new Promise((resolve, reject) => {
                connection.query('SELECT * FROM article', function(err:any, result:any){
                    if(err){
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
},

    getById: async ( articleId:number ): Promise<any> => {
        return new Promise((resolve, reject) => {
            
            connection.query(`SELECT * FROM article WHERE article_id = ${articleId}`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    updateFromJson: async( article:IArticleStringId) => {

        return;

    },
    
    update: async ( article:IArticle) => {

        return;

    },

    create: async( articleToCreate:IArticle) => {
            connection.query(`INSERT INTO article (art_creationDate, art_price, user_author, artype_id, art_body) VALUES (SYSDATE(), ${articleToCreate.price}, ${articleToCreate.author}, ${articleToCreate.type}, '${articleToCreate.body}')`,
            function(err:any, result:any){
                if(err)
                {
                    throw err;
                } else {
                    result;
                }
            });
    },

    delete: async ( article:IArticle ) => {

        return;
    }

}