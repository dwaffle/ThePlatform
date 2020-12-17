import { authenticateToken } from '../../middleware/authenticator';
import { UserModel } from '../../models/user';

export function get( app:any ){

    app.get("/users", authenticateToken, async ( request:any, response:any ) => {

        const users =  await UserModel.getAll();
        response.status(200).send(users);

    });

}