import {IArticle, ArticleModel} from '../../models/article'
import {authenticateToken} from '../../middleware/authenticator'

export function patch(app: any){
    app.patch('/articles', authenticateToken, async(request: any, response:any ) => {
        const article = await ArticleModel.getById(request.body.art_id)
        article.art_is_approved = request.body.art_is_approved
        article.art_id = request.body.art_id
        if(article.art_is_approved == 1){
            ArticleModel.publish(article)
            response.status(200).send("Published")
        } else {
            ArticleModel.unpublish(article)
            response.status(200).send("Unpublished")
        }
    })
}