import {IRating, RatingModel} from '../../models/rating'


export function get( app:any ){

   
        app.get("/rating", async( request:any, response:any ) => {
            
            const rating = await RatingModel.getRating();
            response.status(200).send(rating);

        });
    
    }

