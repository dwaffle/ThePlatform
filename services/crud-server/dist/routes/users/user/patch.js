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
exports.patch = void 0;
const user_1 = require("../../../models/user");
const password_1 = require("../../../models/password");
function patch(app) {
    app.patch("/user", (request, response) => __awaiter(this, void 0, void 0, function* () {
        const payload = request.body;
        console.log(payload);
        if (payload.user_password) {
            payload.user_password = password_1.PasswordModel.hash(payload.user_password);
        }
        user_1.UserModel.patch(payload);
        const user = yield user_1.UserModel.getByUsername(payload.username);
        response.status(200).send(user);
    }));
}
exports.patch = patch;
//# sourceMappingURL=patch.js.map