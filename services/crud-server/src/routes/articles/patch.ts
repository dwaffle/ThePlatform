import {IArticle, ArticleModel} from '../../models/article'
import {authenticateToken} from '../../middleware/authenticator'

export function patch(app: any){
    app.patch('/articles', authenticateToken, async(request: any, response:any ) => {
        const article = await ArticleModel.getById(request.body.art_id)
        article.art_is_approved = request.body.art_is_approved
        article.art_id = request.body.art_id
        if(article.art_is_approved == 1){
            ArticleModel.publish(article)
            response.status(200).send("Published")
        } else {
            ArticleModel.unpublish(article)
            response.status(200).send("Unpublished")
        }
    })
}

// patchEdit: async( article:IArticle) => {
//     let patchedArticle = '';
//     //Double check that a user id has come in with the user info.
//     if(!article.art_id){
//         console.log("No article id")
//         return
//     }
//     //Need to figure out which items, and therefore how to structure the query.
//     if (article.art_title){
//         patchedArticle += `art_title = '${article.art_title}'`
//     }
//     if (article.art_price){
//         patchedArticle += `art_price = '${article.art_price}`
//     }

//     if (article.description){
//         patchedArticle += `description = '${article.description}`
//     }

//     if (article.art_body){
//         patchedArticle += `art_body = '${article.art_body}`
//     }

//     if (article.artype_id){
//         patchedArticle += `artype_id = '${article.artype_id}`
//     }

//     if (article.art_category){
//         patchedArticle += `artype_id = '${article.art_category}`
//     }

   
//     //Take out the final ", " before actually sending the query
//     patchedArticle = patchedArticle.slice(0, -2)
//     connection.query(`UPDATE article SET ${patchedArticle} WHERE art_id = ${article.art_id}`, function(err:any, result:any){
//             if(err){
//                 reject(err);
//             }
//         })
// },