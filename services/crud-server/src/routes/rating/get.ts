import {RatingModel} from '../../models/rating'
import {authenticateToken} from '../../middleware/authenticator'

export function get( app:any ){

    app.get("/rating", authenticateToken, async ( request:any, response:any ) => {

        const rating = await RatingModel.getAll;
        response.status(200).send(rating);

    });

}