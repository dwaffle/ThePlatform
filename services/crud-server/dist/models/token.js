"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModel = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.TokenModel = {
    generateAccessToken: (payload) => {
        return jsonwebtoken_1.default.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3600s' });
    },
    validateToken: (token, onError, onSuccess) => {
        jsonwebtoken_1.default.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
            if (err) {
                onError(err);
                return;
            }
            onSuccess(payload);
        });
    }
};
//# sourceMappingURL=token.js.map