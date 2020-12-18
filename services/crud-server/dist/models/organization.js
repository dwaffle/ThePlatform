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
exports.OrganizationModel = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
});
exports.OrganizationModel = {
    getAll: () => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM organization', function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    getById: (OrganizationId) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM organization WHERE article_id = ${OrganizationId}`, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    }),
    update: (organization) => __awaiter(void 0, void 0, void 0, function* () {
        return;
    }),
    create: (organization) => __awaiter(void 0, void 0, void 0, function* () {
        connection.query(`INSERT INTO organization (ord_id, org_title, org_price, orgType_id) VALUES ('${organization.organization_id}', '${organization.organization_title}',${organization.organization_price}, '${organization.organization_type}')`, function (err, result) {
            if (err) {
                throw err;
            }
            else {
                result;
            }
        });
    }),
    delete: (organization) => __awaiter(void 0, void 0, void 0, function* () {
        return;
    })
};
//# sourceMappingURL=organization.js.map