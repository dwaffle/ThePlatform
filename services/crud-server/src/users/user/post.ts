import { UserModel } from '../../models/user';

export function post( app:any ){
    //Gets a specific user.  For setting the logged in user.
    app.post("/user", async ( request:any, response:any ) => {
        const username = request.body.user_userName;
        const user =  await UserModel.getByUsername(username);
        response.status(200).send(user);
    });

}