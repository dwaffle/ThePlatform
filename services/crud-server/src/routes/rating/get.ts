import {authenticateToken} from '../../middleware/authenticator'
import {IRating, RatingModel} from '../../models/rating'


export function get( app:any ){

   
    app.get("/rating", authenticateToken, async( request:any, response:any ) => {

        const id :IRating = request.body;
        // console.log("***id***", id.rating_article_id)
        const rating = await RatingModel.getAll();
        response.status(200).send(rating);

        // const orgs = OrganizationModel.getAll;
        // response.status(200).send(orgs);

    });

}

