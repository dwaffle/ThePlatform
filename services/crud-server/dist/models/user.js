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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const lodash_1 = require("lodash");
const path_1 = require("path");
const connection_1 = require("./connection");
const connection = new connection_1.DBConnection();
exports.UserModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection.getClient();
        return new Promise((resolve, reject) => {
            client.query('SELECT * FROM user', function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    setAll: (user) => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection.getClient();
        client.query(`INSERT INTO user (user_type, user_userName, user_firstName, user_lastName, user_password, user_email, user_creation_date )VALUES (2, '${user.user_userName}', '${user.user_firstName}', '${user.user_lastName}', '${user.user_password}', '${user.user_email}', SYSDATE())`),
            function (err, result) {
                if (err) {
                    lodash_1.reject(err);
                }
                else {
                    path_1.resolve(result);
                }
            };
    }),
    getByUsername: (username) => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection.getClient();
        return new Promise((resolve, reject) => {
            client.query(`SELECT * FROM user WHERE user_userName = '${username}'`, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    }),
    delete: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection.getClient();
        return new Promise((resolve, reject) => {
            client.query(`DELETE FROM user WHERE user_id = ${userId}`, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    patch: (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
        const client = yield connection.getClient();
        let queryParams = "";
        if (!userInfo.user_id) {
            console.log("No user id");
            return;
        }
        if (userInfo.user_email) {
            queryParams += `user_email = '${userInfo.user_email}', `;
        }
        if (userInfo.user_firstName) {
            queryParams += `user_firstName = '${userInfo.user_firstName}', `;
        }
        if (userInfo.user_lastName) {
            queryParams += `user_lastName = '${userInfo.user_lastName}', `;
        }
        if (userInfo.user_password) {
            queryParams += `user_password = '${userInfo.user_password}', `;
        }
        queryParams = queryParams.slice(0, -2);
        client.query(`UPDATE user SET ${queryParams} WHERE user_id = ${userInfo.user_id}`, function (err, result) {
            if (err) {
                lodash_1.reject(err);
            }
        });
    })
};
//# sourceMappingURL=user.js.map