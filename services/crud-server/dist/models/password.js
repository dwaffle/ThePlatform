"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordModel = void 0;
const crypto_1 = __importDefault(require("crypto"));
exports.PasswordModel = {
    hash: (payload) => crypto_1.default.createHash("sha256").update(payload).digest("hex")
};
//# sourceMappingURL=password.js.map