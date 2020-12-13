import {ArticleModel} from '../../models/article'
import {authenticateToken} from '../../middleware/authenticator'

export function get( app:any ){

    app.get("/articles", authenticateToken, async ( request:any, response:any ) => {

        const articles = await ArticleModel.getAll();
        response.status(200).send(articles);

    });

}