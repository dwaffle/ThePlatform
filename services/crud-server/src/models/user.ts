import fs from 'fs';


var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
})

// read user
const path = `${__dirname}/../data`;
const file = `${path}/users.json`;

if(!fs.existsSync(path)){
    fs.mkdirSync(path);
}

if(!fs.existsSync(file)){
    fs.writeFileSync(file, JSON.stringify([]), { encoding: 'utf-8' });
}

export interface IUser {
    username: string;
    password: string;
    fullName: string;
}

export interface IUserNoPassword {
    username: string;
    fullName: string;
}

export const UserModel = {

    getAll: ():IUser[] => {
        const users = JSON.parse(fs.readFileSync(file, { encoding: 'utf-8' }));
        console.log('UserModel.getAll', users);
        return users;
    },

    getAllWithoutPassword: ():IUserNoPassword[] => {
        return UserModel.getAll().map(( user:IUser ) => {
            delete user.password;
            return user;
        });
    },

    setAll: ( users:IUser[] ) => {
        fs.writeFileSync(file, JSON.stringify(users, null, 4), { encoding: 'utf-8' });
    },

    getByUsername: ( username:string ): IUser|undefined => {

        return UserModel.getAll().find( user => {
            console.log(user, username);
            return user.username === username;
        });

    }

}