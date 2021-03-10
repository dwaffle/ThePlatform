//To be replaced with the code for retriving an article.
import dotenv from 'dotenv';
dotenv.config();
var mysql = require('mysql');

var mysql = require('mysql');

export class DBConnection {

    private static instance:DBConnection|null;
    
    private _client:any;
    
    public getClient():Promise<any>{
        return new Promise((resolve, reject) => {

            this._client.connect(( err:any ) => {
                
                if( err ){
                    reject(err);
                } else {
                    resolve(this._client);
                }
                
            });

        });
    };

    constructor(){

        if( DBConnection.instance ){
            return DBConnection.instance;
        }

        else {
            this._client = new mysql.createConnection({
                host: process.env.MYSQL_CONNECTION_STRING,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            });

            DBConnection.instance = this;

            this._client.on('close', () => {
                DBConnection.instance = null;
            })
        }

    }

}