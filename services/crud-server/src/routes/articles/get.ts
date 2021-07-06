import {ArticleModel} from '../../models/article'


export function get( app:any ){

    app.get("/articles", async ( request:any, response:any ) => {

        const articles = await ArticleModel.getAll();
        response.status(200).send(articles);

    });

}