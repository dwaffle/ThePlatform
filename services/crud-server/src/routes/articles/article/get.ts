import {ArticleModel} from '../../../models/article'
import {authenticateToken} from '../../../middleware/authenticator'

export function get(app:any){
    app.get('/articles/:articleId', authenticateToken, async(request:any, response: any) => {
        const articleId = request.params.taskId
    })
}