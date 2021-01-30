import {authenticateToken} from '../../../middleware/authenticator'
import { UserModel } from '../../../models/user';
import { PasswordModel } from '../../../models/password';

export function patch( app:any ){
    //Change an existing user's information.  If there's a password, hash it.
    app.patch("/user", async ( request:any, response:any ) => {
        const payload = request.body;
        console.log(payload);
        if(payload.user_password){
            payload.user_password = PasswordModel.hash(payload.user_password);
        }
        UserModel.patch(payload);
        const user =  await UserModel.getByUsername(payload.username);
        response.status(200).send(user);
    });

}