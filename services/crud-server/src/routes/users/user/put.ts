import { UserModel, IUser } from '../../../models/user';

export async function put( app:any ){

    app.put("/user", async ( request:any, response:any ) => {
        // read Organization from post body
        const Memeber:IUser = request.body;

        console.log( " ++++++ /Memeber " + Memeber)
        const updatedMemeber = await UserModel.update(Memeber)
        // send successful response
        response.status(200).send(updatedMemeber);

    });

}