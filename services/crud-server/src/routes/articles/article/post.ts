import {IArticle, ArticleModel} from '../../../models/article'
import {authenticateToken} from '../../../middleware/authenticator'

export function post(app:any){
    app.post("/articles", authenticateToken, async (request:any, response: any) => {
        try {
        const article:IArticle = request.body;
        ArticleModel.create({
            art_id: article.art_id,
            art_price: article.art_price,
            artype_id: article.artype_id,
            art_title: article.art_title,
            description: article.description,
            user_author: article.user_author,
            art_body: article.art_body,
            art_image: article.art_image,
            art_category: article.art_category,
            series_id: article.series_id
        });
        response.send(201);
    } catch {
        response.send(400).send({
            error: 400,
            message: "There is a syntax error in your article formation.  It needs a price, author number, title, descrption, type number, and a body."
        })
    }
    })
}