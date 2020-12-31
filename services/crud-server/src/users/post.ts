
import { authenticateToken } from '../middleware/authenticator';
import { IUser, UserModel } from '../models/user';
import { PasswordModel } from '../models/password';

export function post( app:any ){

    app.post("/users", async ( request:any, response:any ) => {

        // read payload from post body
        const payload:IUser = request.body;

        // hash password so we don't know what it is
        payload.user_password = PasswordModel.hash(payload.user_password);

        UserModel.setAll(payload);

        // send successful response
        response.status(201).send();

    });

}