//To be replaced with the code for retriving an article.
import dotenv from 'dotenv';
import { reject } from 'lodash';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

// import { MysqlConnection } from '../connection'

// var myConnection =  new MysqlConnection();

//Id and date of creation are generated for us by the SQL query.  user_firstName and user_lastName are used when getting an article back.
export interface IArticle {
    art_id: number,
    art_price: number,
    user_userName?: string,
    user_author: number,
    user_firstName?: string,
    user_lastName?: string,
    art_creationDate?: string,
    artype_id: number,
    description: string,
    art_title: string,
    art_body: string,
    art_image: string,
    art_is_approved?: number,
    art_category:string,
    series_id?: number,
    series_title?: string
}

export const ArticleModel = {
    
    getAll: async ():Promise<any> => {
        // var connection = await myConnection.getClient()
        return new Promise((resolve, reject) => {
                connection.query('select art_id, art_price, user_author, art_creationDate, user_userName, user_firstName, user_lastName, artype_id, description, art_title,  art_body, art_image, art_is_approved, art_category, a.series_id, series_title from article a join user u on a.user_author = u.user_id left join series s on s.series_id = a.series_id;', function(err:any, result:any){
                    if(err){
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
    },

    getBytitle: async ( title:string ):Promise<IArticle> => {
        return new Promise<IArticle>((resolve, reject) => {
            
            connection.query(`SELECT * FROM article WHERE art_title = '${title}'`, function(err:any, result: any){
                if(err){
                    reject(err);
                } else {
                    console.log(result);
                    resolve(result);
                }
            })
        })
      
    },

    getById: async ( articleId:number ): Promise<any> => {
        // var connection = await myConnection.getClient()
        return new Promise((resolve, reject) => {
            
            connection.query(`SELECT art_id, art_price,  user_author, user_firstName, user_lastName, artype_id, description, art_title,  art_body, art_image, art_is_approved from article a JOIN user u on a.user_author = u.user_id WHERE art_id = ${articleId}`, function(err:any, result: any){
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
        // var connection = await myConnection.getClient()
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
        // var connection = await myConnection.getClient()
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
    
    patchEdit: async( article:IArticle) => {
        let patchedArticle = '';
        //Double check that a user id has come in with the user info.
        if(!article.art_id){
            console.log("No article id")
            return
        }
        //Need to figure out which items, and therefore how to structure the query.
        if (article.art_title){
            patchedArticle += `art_title = '${article.art_title}', `
        }
        if (article.art_price){
            patchedArticle += `art_price = ${article.art_price}, `
        }

        if (article.description){
            patchedArticle += `description = '${article.description}', `
        }

        if (article.art_body){
            patchedArticle += `art_body = '${article.art_body}', `
        }

        if (article.artype_id){
            patchedArticle += `artype_id = ${article.artype_id}, `
        }

        if (article.art_category){
            patchedArticle += `art_category = '${article.art_category}', `
        }

        if (article.series_id){
            patchedArticle += `series_id = ${article.series_id}, `
        }

        //Take out the final ", " before actually sending the query
        patchedArticle = patchedArticle.slice(0, -2)
        console.log(patchedArticle)
        connection.query(`UPDATE article SET ${patchedArticle} WHERE art_id = ${article.art_id}`, function(err:any, result:any){
            if(err){
                reject(err);
            }
        })
    },

    create: async( articleToCreate:IArticle) => {
            
        let _postArt = `INSERT INTO article (art_title, user_author, 
            art_creationDate, art_price, description, art_body, artype_id,
            art_image, art_category, series_id) 
        VALUES 
        ( ?, ?, SYSDATE(), ?, ?, ?, ?, ?, ?, ?)`

        connection.query(_postArt, [articleToCreate.art_title, 
                        articleToCreate.user_author, 
                        articleToCreate.art_creationDate,
                        articleToCreate.art_price,
                        articleToCreate.description,
                        articleToCreate.art_body,
                        articleToCreate.artype_id,
                        articleToCreate.art_image,
                        articleToCreate.art_category,
                        articleToCreate.series_id || null
                    ] 
                , function(err:any, result:any){
                    if(err)
                    {
                        throw err;
                    } else {
                        result;
                    }
                });
    },

    delete: async (articleID:number) => {
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM user WHERE user_id = ${articleID}`, function(err:any, result:any){
                if(err){
                    reject(err)
                } else {
                    resolve(result);
                }
            })
        })
    },

}