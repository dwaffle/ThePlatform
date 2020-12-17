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
exports.post = void 0;
const user_1 = require("../../models/user");
const password_1 = require("../../models/password");
const token_1 = require("../../models/token");
function post(app) {
    app.post('/tokens', (request, response) => __awaiter(this, void 0, void 0, function* () {
        const username = request.body.user_userName;
        const password = request.body.user_password;
        const matchedUser = yield user_1.UserModel.getByUsername(username);
        const result = JSON.parse(JSON.stringify(matchedUser));
        if (!matchedUser) {
            response.status(404).send({
                message: `Cannot find user with username ${username}`
            });
            return;
        }
        const hashedPassword = password_1.PasswordModel.hash(`${password}`);
        if (!(hashedPassword === result[0].user_password)) {
            response.status(401).send({
                message: `Incorrect Password for user with username ${username}`
            });
            return;
        }
        response.status(201).send({
            token: token_1.TokenModel.generateAccessToken({
                username,
                fullName: matchedUser.user_userName
            })
        });
    }));
}
exports.post = post;
//# sourceMappingURL=post.js.map