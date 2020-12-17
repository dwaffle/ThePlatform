"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const user_1 = require("../../models/user");
const password_1 = require("../../models/password");
const token_1 = require("../../models/token");
function post(app) {
    app.post('/tokens', (request, response) => {
        const username = request.body.username;
        const password = request.body.password;
        const matchedUser = user_1.UserModel.getByUsername(username);
        if (!matchedUser) {
            response.status(404).send({
                message: `Cannot find user with username ${username}`
            });
            return;
        }
        const hashedPassword = password_1.PasswordModel.hash(`${password}`);
        if (!(hashedPassword === matchedUser.password)) {
            response.status(401).send({
                message: `Incorrect Password for user with username ${username}`
            });
            return;
        }
        response.status(201).send({
            token: token_1.TokenModel.generateAccessToken({
                username,
                fullName: matchedUser.fullName
            })
        });
    });
}
exports.post = post;
//# sourceMappingURL=post.js.map