"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const authenticator_1 = require("../middleware/authenticator");
const user_1 = require("../models/user");
function get(app) {
    app.get("/users", authenticator_1.authenticateToken, (request, response) => {
        const users = user_1.UserModel.getAllWithoutPassword();
        response.status(200).send(users);
    });
}
exports.get = get;
//# sourceMappingURL=get.js.map