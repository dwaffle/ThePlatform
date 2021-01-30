import {authenticateToken} from '../middleware/authenticator'
import { UserModel } from '../models/user';

export function remove( app:any ){
    //Deletes a user for when they click the delete button.
    app.delete("/users", authenticateToken, async ( request:any, response:any ) => {
        const username = request.body.user_userName;
        const matchedUser = await UserModel.getByUsername(username);

        //This turns matchedUser into an array of IUser with one object in it.
        const result = JSON.parse(JSON.stringify(matchedUser));


        if(!result[0].user_id){
            response.status(404).send({
                error: 404,
                message: "No such user"
            })
            return;
        }
        await UserModel.delete(result[0].user_id)
        response.status(200).send("Deleted");
    });
}