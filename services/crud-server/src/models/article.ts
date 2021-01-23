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


//Id and date of creation are generated for us by the SQL query.  user_firstName and user_lastName are used when getting an article back.
export interface IArticle {
    art_id?: number,
    art_price: number,
    user_author: number,
    user_firstName?: string,
    user_lastName?: string,
    artype_id: number,
    description: string,
    art_title: string,
    art_body: string,
    art_image: string,
    art_is_approved?: number
}

export const ArticleModel = {

    getAll: async ():Promise<any> => {
        return new Promise((resolve, reject) => {
                connection.query('SELECT art_id, art_price,  user_author, user_firstName, user_lastName, artype_id, description, art_title,  art_body, art_image, art_is_approved from article a JOIN user u on a.user_author = u.user_id;', function(err:any, result:any){
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

    publish: async ( article:IArticle) => {
        return new Promise<any>((resolve, reject) => {
            connection.query(`UPDATE article SET art_is_approved = 1 WHERE art_id = ${article.art_id}`, function(err:any, result:any){
                if(err){
                    console.log(`${article.art_is_approved}` + ` `+ `${article.art_id}`)
                    throw err
                } else {
                    result
                }
            })
        })
    },

    unpublish: async ( article:IArticle) => {
        return new Promise<any>((resolve, reject) => {
            connection.query(`UPDATE article SET art_is_approved = 0 WHERE art_id = ${article.art_id}`, function(err:any, result:any){
                if(err){
                    console.log(`${article.art_is_approved}` + ` `+ `${article.art_id}`)
                    throw err
                } else {
                    result
                }
            })
        })
    },
    
    update: async ( article:IArticle) => {

        return;

    },

    create: async( articleToCreate:IArticle) => {
            connection.query(`INSERT INTO article (art_title, user_author, art_creationDate, art_price, description, art_body, artype_id, art_image) VALUES ('${articleToCreate.art_title}', '${articleToCreate.user_author}', SYSDATE(), '${articleToCreate.art_price}', '${articleToCreate.description}', '${articleToCreate.art_body}', '${articleToCreate.artype_id}', '${articleToCreate.art_image}')`,
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