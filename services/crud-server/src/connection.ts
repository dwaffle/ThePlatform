import dotenv from 'dotenv';
dotenv.config();


var mysql = require('mysql');

export class MysqlConnection {

    private static instance:MysqlConnection|null;
    
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

        if( MysqlConnection.instance ){
            return MysqlConnection.instance;
        }

        else {
            this._client = new mysql.createConnection({
                host: process.env.MYSQL_CONNECTION_STRING,
                user: 'admin',
                password: process.env.MYSQL_PASSWORD,
                database: 'mydb'
            });

            MysqlConnection.instance = this;

            this._client.on('close', () => {
                MysqlConnection.instance = null;
            })
        }

    }

}
