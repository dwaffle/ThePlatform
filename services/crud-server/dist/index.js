"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Tokens = __importStar(require("./routes/tokens"));
const Users = __importStar(require("./routes/users"));
const Articles = __importStar(require("./routes/articles"));
const app = express_1.default();
const port = 4330;
app.use(express_1.default.json());
app.use(cors_1.default());
function loadEndpoints(endpoint) {
    if (typeof endpoint === "function") {
        endpoint(app);
        return;
    }
    Object.values(endpoint).forEach(loadEndpoints);
}
[Tokens, Users, Articles].forEach(ImportedObject => {
    Object.values(ImportedObject).forEach(loadEndpoints);
});
app.listen(port, () => {
    console.log(`Web Server Started and listening on localhost:${port}`);
});
//# sourceMappingURL=index.js.map