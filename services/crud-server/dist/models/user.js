"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const fs_1 = __importDefault(require("fs"));
const dotenv_1 = __importDefault(require("dotenv"));
const lodash_1 = require("lodash");
const path_1 = require("path");
dotenv_1.default.config();
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
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user', function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    },
    getAllWithoutPassword: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT user_id, user_type, payout_id, user_userName, user_firstName, user_lastName, user_email, user_creation_date FROM user')
                , function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        console.log(result);
                        resolve(result);
                    }
                };
        });
    },
    setAll: (user) => __awaiter(void 0, void 0, void 0, function* () {
        connection.query(`INSERT INTO user (user_type, user_userName, user_firstName, user_lastName, user_password, user_email, user_creation_date )VALUES (1, '${user.user_userName}', '${user.user_firstName}', '${user.user_lastName}', '${user.user_password}', '${user.user_email}', SYSDATE())`),
            function (err, result) {
                if (err) {
                    lodash_1.reject(err);
                }
                else {
                    console.log(result);
                    path_1.resolve(result);
                }
            };
    }),
    getByUsername: (username) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM user WHERE user_userName = '${username}'`, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    })
};
//# sourceMappingURL=user.js.map