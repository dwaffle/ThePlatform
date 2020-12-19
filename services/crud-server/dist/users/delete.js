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
exports.remove = void 0;
const authenticator_1 = require("../middleware/authenticator");
const user_1 = require("../models/user");
function remove(app) {
    app.delete("/users", authenticator_1.authenticateToken, (request, response) => __awaiter(this, void 0, void 0, function* () {
        const username = request.body.user_userName;
        const matchedUser = yield user_1.UserModel.getByUsername(username);
        const result = JSON.parse(JSON.stringify(matchedUser));
        if (!result[0].user_id) {
            response.status(404).send({
                error: 404,
                message: "No such user"
            });
            return;
        }
        yield user_1.UserModel.delete(result[0].user_id);
        response.status(200).send("Deleted");
    }));
}
exports.remove = remove;
//# sourceMappingURL=delete.js.map