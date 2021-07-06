import {ArticleModel} from '../../../models/article'

export function get(app:any){
    app.get('/articles/:articleId', async(request:any, response: any) => {
        const articleId = request.params.articleId;
        const foundArticle = await ArticleModel.getById(articleId);

        if(foundArticle){
            response.send(foundArticle)
        } else{
            response.status(404).send({
                error: 404,
                message: `Cannot find article with number ${articleId}`
            });
        }
    })
}