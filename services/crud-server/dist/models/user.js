"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const fs_1 = __importDefault(require("fs"));
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
});
const path = `${__dirname}/../data`;
const file = `${path}/users.json`;
if (!fs_1.default.existsSync(path)) {
    fs_1.default.mkdirSync(path);
}
if (!fs_1.default.existsSync(file)) {
    fs_1.default.writeFileSync(file, JSON.stringify([]), { encoding: 'utf-8' });
}
exports.UserModel = {
    getAll: () => {
        const users = connection.query('SELECT * FROM user', function (err, result) {
            if (err) {
                throw err;
            }
            else {
                return result;
            }
        });
        console.log('UserModel.getAll', users);
        return users;
    },
    getAllWithoutPassword: () => {
        return exports.UserModel.getAll().map((user) => {
            delete user.password;
            return user;
        });
    },
    setAll: (users) => {
        fs_1.default.writeFileSync(file, JSON.stringify(users, null, 4), { encoding: 'utf-8' });
    },
    getByUsername: (username) => {
        return exports.UserModel.getAll().find(user => {
            console.log(user, username);
            return user.username === username;
        });
    }
};
//# sourceMappingURL=user.js.map