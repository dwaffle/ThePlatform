"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const token_1 = require("../models/token");
function authenticateToken(request, response, next) {
    const authorizationHeader = request.headers['authorization'];
    if (!authorizationHeader) {
        response.status(401).send({
            message: "This is a protected resource. Please login first."
        });
        return;
    }
    const token = authorizationHeader.split(" ").pop();
    token_1.TokenModel.validateToken(token, (err) => {
        response.status(401).send({
            message: "This is a protected resource. Please login first."
        });
    }, (payload) => {
        next();
    });
}
exports.authenticateToken = authenticateToken;
//# sourceMappingURL=authenticator.js.map