import { UserModel } from '../models/user';
import { PasswordModel } from '../models/password';
import { TokenModel } from '../models/token';

export function post( app:any ){

    app.post('/tokens', ( request:any, response:any ) => {

        const username = request.body.username;
        const password = request.body.password;
        const matchedUser = UserModel.getByUsername(username);
        
        if(!matchedUser){
            response.status(404).send({
                message: `Cannot find user with username ${username}`
            });
            return;
        }

        const hashedPassword = PasswordModel.hash(`${password}`);

        if(!(hashedPassword === matchedUser.password)){
            response.status(401).send({
                message: `Incorrect Password for user with username ${username}`
            });
            return;
        }

        response.status(201).send({
            token: TokenModel.generateAccessToken({
                username,
                fullName: matchedUser.fullName
            })
        });

    });

}