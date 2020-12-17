
import { authenticateToken } from '../../middleware/authenticator';
import { IUser, UserModel } from '../../models/user';
import { PasswordModel } from '../../models/password';

export function post( app:any ){

    app.post("/users", ( request:any, response:any ) => {

        // read payload from post body
        const payload:IUser = request.body;

        // hash password so we don't know what it is
        payload.password = PasswordModel.hash(payload.password);

        const users = UserModel.getAll();
        users.push(payload);
        UserModel.setAll(users);

        // send successful response
        response.status(201).send();

    });

}