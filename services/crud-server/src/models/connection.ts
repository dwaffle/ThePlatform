import dotenv from 'dotenv';
dotenv.config();

export class DBConnection{

    private static _connection:DBConnection

    constructor(){
        if(DBConnection._connection){
            return DBConnection._connection
        } else {
            DBConnection._connection = this
        }
    }

    public connectToDB(){
        var mysql = require('mysql');
       return mysql.createConnection({
        host: process.env.MYSQL_CONNECTION_STRING,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
        })
    }
}
