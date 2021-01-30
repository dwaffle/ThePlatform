import { authenticateToken } from '../../middleware/authenticator';
import {articlePurchase, UserOwnsArticle} from '../../models/purchaseArticle'

export function get(app:any){
    app.get('/purchaseArticle', async(request:any, response: any) => {
        const user_id = request.body.user_id;
        const foundArticle = await UserOwnsArticle.get(user_id);

        if(foundArticle){
            response.send(foundArticle)
        } else{
            response.status(404).send({
                error: 404,
                message: `Cannot find article with number ${user_id}`
            });
        }
    })
}