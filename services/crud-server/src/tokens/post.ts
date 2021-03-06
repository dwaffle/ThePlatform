import { UserModel, IUser } from '../models/user';
import { PasswordModel } from '../models/password';
import { TokenModel } from '../models/token';

export function post( app:any ){

    app.post('/tokens', async ( request:any, response:any ) => {
        const username = request.body.user_userName;
        const password = request.body.user_password;
        const matchedUser = await UserModel.getByUsername(username);
        console.log(matchedUser);
        if(!matchedUser){
            response.status(404).send({
                message: `Cannot find user with username ${username}`
            });
            return;
        }

        const hashedPassword = PasswordModel.hash(`${password}`);

        if(!(hashedPassword === matchedUser.user_password)){
            response.status(401).send({
                message: `Incorrect Password for user with username ${username}`
            });
            return;
        }

        response.status(201).send({
            token: TokenModel.generateAccessToken({
                username,
                fullName: matchedUser.user_firstName
            })
        });

    });

}