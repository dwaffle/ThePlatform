import {IRating, RatingModel} from '../../models/rating'


export function get( app:any ){

   
        app.get("/rating", async( request:any, response:any ) => {
            
            const rating = await RatingModel.getRating();
            response.status(200).send(rating);

        });
    
    }
    

// export function get(app:any){
//     app.get('/rating/articleId', async(request:any, response: any) => {

//         const articleId = request.params.articleId;
//         console.log(articleId)
//         const rating = await RatingModel.getById(articleId);
//         console.log(rating)

//         if(rating){
//             response.send(rating)
//         } else{
//             response.status(404).send({
//                 error: 404,
//                 message: `Cannot find Rating article with article ID = ${articleId}`
//             });
//         }
//     })
// }

