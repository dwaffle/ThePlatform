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

export interface IArticle {
    _id: number,
    creationDate: string,
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
            connection.query(`SELECT * FROM article WHERE ${articleId} = article_id`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    updateFromJson: async( task:IArticleStringId) => {

        return;

    },
    
    update: async ( task:IArticle) => {

        return;

    },

    create: async( taskToCreate:Omit<IArticle, "_id"> ):Promise<IArticle> => {
        
        return;
    },

    delete: async ( task:IArticle ) => {

        return;
    }

}