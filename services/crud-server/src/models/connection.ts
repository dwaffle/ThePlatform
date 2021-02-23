import dotenv from 'dotenv';
dotenv.config();
var mysql = require('mysql');

export class DBConnection{

    private static instance:DBConnection|null
    private _client:any

    constructor(){
        if(DBConnection.instance){
            return DBConnection.instance
        } else {    
            this._client = mysql.createConnection({
                host: process.env.MYSQL_CONNECTION_STRING,
                user: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            })
            DBConnection.instance = this
        }    
    }

    public connectToDB(){
        
        return this._client
    }
}
