import {IArticle, ArticleModel} from '../../../models/article'
import {authenticateToken} from '../../../middleware/authenticator'

export function post(app:any){
    app.post("/articles", authenticateToken, async (request:any, response: any) => {
        try {
       const article:IArticle = request.body;
        ArticleModel.create({
            price: article.price,
            type: article.type,
            author: article.author,
            body: article.body
        });
        response.send(201);
    } catch {
        response.send(400).send({
            error: 400,
            message: "There is a syntax error in your article formation.  It needs a price, author number, type number, and a body."
        })
    }
    })
}