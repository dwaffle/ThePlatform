import {authenticateToken} from '../../middleware/authenticator'
import { ArticleModel } from '../../models/article'

export function remove( app:any ){
    app.delete("/articles", authenticateToken, async ( request:any, response:any ) => {
        const artTitle = request.body.art_title;
        const matchedUser = await ArticleModel.getBytitle(artTitle);

        //This turns matchedUser into an array of IUser with one object in it.
        const result = JSON.parse(JSON.stringify(matchedUser));


        if(!result[0].art_id){
            response.status(404).send({
                error: 404,
                message: "No such Article"
            })
            return;
        }
        await ArticleModel.delete(result[0].art_id)
        response.status(200).send("Deleted");
    });
}