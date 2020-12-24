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
exports.ArticleModel = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
});
exports.ArticleModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM article', function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    getById: (articleId) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM article WHERE art_id = ${articleId}`, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    update: (article) => __awaiter(void 0, void 0, void 0, function* () {
        return;
    }),
    create: (articleToCreate) => __awaiter(void 0, void 0, void 0, function* () {
        connection.query(`INSERT INTO article (art_title, user_author, art_creationDate, art_price, description, art_body, artype_id) VALUES ('${articleToCreate.art_title}', '${articleToCreate.user_author}', SYSDATE(), ${articleToCreate.art_price}, '${articleToCreate.description}', '${articleToCreate.art_body}', ${articleToCreate.artype_id})`, function (err, result) {
            if (err) {
                throw err;
            }
            else {
                result;
            }
        });
    }),
    delete: (article) => __awaiter(void 0, void 0, void 0, function* () {
        return;
    })
};
//# sourceMappingURL=article.js.map