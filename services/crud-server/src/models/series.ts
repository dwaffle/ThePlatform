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


//Id and date of creation are generated for us by the SQL query.  user_firstName and user_lastName are used when getting an article back.
export interface ISeries{
    series_id: number;
    series_owner: number;
    series_title: string;
    series_desc: string;
    series_price?: string;
    series_category: string;
}

export const SeriesModel = {
    createSeries: async( seriesToCreate:ISeries) => {
        connection.query(`INSERT INTO series (series_id, series_owner, series_title, series_desc, series_price, series_category) 
        VALUES ('${seriesToCreate.series_id}', '${seriesToCreate.series_owner}', '${seriesToCreate.series_title}', '${seriesToCreate.series_desc}', '${seriesToCreate.series_price}', '${seriesToCreate.series_category}' )`,
        function(err:any, result:any){
            if(err)
            {
                throw err;
            } else {
                result;
            }
        });
    },

    getAll: async ():Promise<any> => {
        return new Promise((resolve, reject) => {
                connection.query('SELECT series_id, series_owner, series_title, series_desc, series_price, series_category from series;', 
                function(err:any, result:any){
                    if(err){
                        reject(err);
                    } else {
                        resolve(result);
                    }
                })
            })
        },
}
