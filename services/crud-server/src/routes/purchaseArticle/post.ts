import {articlePurchase, UserOwnsArticle} from '../../models/purchaseArticle'
import {authenticateToken} from '../../middleware/authenticator'

export function post(app:any){
    app.post("/purchaseArticle", authenticateToken, async (request:any, response: any) => {
        try {
        const purchase:articlePurchase = request.body;
        UserOwnsArticle.create({
            art_id: purchase.art_id,
            user_id: purchase.user_id
        });
        response.sendStatus(201);
    } catch {
        response.sendStatus(400).send({
            error: 400,
            message: "Temporary, if you see this.. Fix me!"
        })
    }
    })
}