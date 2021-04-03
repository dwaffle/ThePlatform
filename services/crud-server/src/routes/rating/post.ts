import {IRating, RatingModel} from '../../models/rating'
import {authenticateToken} from '../../middleware/authenticator'

export function post(app:any){
    app.post("/rating", authenticateToken, async (request:any, response: any) => {
        try {
        const rating: IRating = request.body;

        // rating_title: string;
        // rating_value: number;
        // rating_review: string;
        // rating_date: string;
        // rating_user_id: number;
        // user_userName?:string;
        // rating_article_id: number;
        // art_title?:string;

        RatingModel.newRate({
            rating_title: rating.rating_title,
            rating_value: rating.rating_value,
            rating_review: rating.rating_review,
            rating_user_id:rating.rating_user_id,
            rating_article_id: rating.rating_article_id,

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