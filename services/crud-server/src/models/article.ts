//To be replaced with the code for retriving an article.
import dotenv from 'dotenv';
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
    description: string,
    title: string,
    body: string
}

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
            
            connection.query(`SELECT * FROM article WHERE art_id = ${articleId}`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    resolve(result);
                }
            })
        })
    },

    // updateFromJson: async( article:IArticleStringId) => {

    //     return;

    // },
    
    update: async ( article:IArticle) => {

        return;

    },

    create: async( articleToCreate:IArticle) => {
            connection.query(`INSERT INTO article (art_title, user_author, art_creationDate, art_price, description, art_body, artype_id) VALUES ('${articleToCreate.title}', '${articleToCreate.author}', SYSDATE(), ${articleToCreate.price}, '${articleToCreate.description}', '${articleToCreate.body}', ${articleToCreate.type})`,
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