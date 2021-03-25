import { ArticleModel } from "../../../models/article";
import {authenticateToken} from '../../../middleware/authenticator'

//actually patch for myArticles
export function put( app:any ){
    app.put("/articles", authenticateToken, async ( request:any, response:any ) => {
        const payload = request.body;
        console.log(payload);
        ArticleModel.patchEdit(payload);
        const article =  await ArticleModel.getById(payload.art_id);
        response.status(200).send(article);
    });

}