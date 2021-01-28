import {authenticateToken} from '../../middleware/authenticator'
import {RatingModel} from '../../models/rating'


export function get( app:any ){

   
    app.get("/rating", authenticateToken, async( request:any, response:any ) => {

        const rating = await RatingModel.getAll();
        response.status(200).send(rating);

        // const orgs = OrganizationModel.getAll;
        // response.status(200).send(orgs);

    });

}

