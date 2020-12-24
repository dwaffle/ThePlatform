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
const article_1 = require("../../../models/article");
const authenticator_1 = require("../../../middleware/authenticator");
function post(app) {
    app.post("/articles", authenticator_1.authenticateToken, (request, response) => __awaiter(this, void 0, void 0, function* () {
        try {
            const article = request.body;
            article_1.ArticleModel.create({
                art_price: article.art_price,
                artype_id: article.artype_id,
                art_title: article.art_title,
                description: article.description,
                user_author: article.user_author,
                art_body: article.art_body
            });
            response.send(201);
        }
        catch (_a) {
            response.send(400).send({
                error: 400,
                message: "There is a syntax error in your article formation.  It needs a price, author number, title, descrption, type number, and a body."
            });
        }
    }));
}
exports.post = post;
//# sourceMappingURL=post.js.map