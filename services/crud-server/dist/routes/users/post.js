"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
const user_1 = require("../../models/user");
const password_1 = require("../../models/password");
function post(app) {
    app.post("/users", (request, response) => {
        const payload = request.body;
        payload.user_password = password_1.PasswordModel.hash(payload.user_password);
        user_1.UserModel.setAll(payload);
        response.status(201).send();
    });
}
exports.post = post;
//# sourceMappingURL=post.js.map