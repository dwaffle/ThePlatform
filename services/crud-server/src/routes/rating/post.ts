import {IRating, RatingModel} from '../../models/rating'
import {authenticateToken} from '../../middleware/authenticator'

export function post(app:any){
    app.post("/rating", authenticateToken, async (request:any, response: any) => {
        try {
        const rating: IRating = request.body;

        RatingModel.newRate({
            rating_title: rating.rating_title,
            rating_value: rating.rating_value,
            rating_review: rating.rating_review,
            user_user_id: rating.user_user_id,
            article_art_id: rating.article_art_id,

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