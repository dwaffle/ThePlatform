import {authenticateToken} from '../../../middleware/authenticator'
import { UserModel } from '../../../models/user';
import { PasswordModel } from '../../../models/password';

export function patch( app:any ){
    //Gets a specific user.  For setting the logged in user.
    app.patch("/user", async ( request:any, response:any ) => {
        const payload = request.body;
        console.log(payload);
        const user =  await UserModel.getByUsername(payload.username);
        UserModel.patch(payload);
    
        response.status(200).send(user);
    });

}