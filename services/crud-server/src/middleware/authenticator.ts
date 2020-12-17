import { TokenModel } from '../models/token';

export function authenticateToken( request:any, response:any, next:()=>any ){
    
    const authorizationHeader = request.headers['authorization'];

    if(!authorizationHeader){
        response.status(401).send({
            message: "This is a protected resource. Please login first."
        });
        return;
    }

    const token = authorizationHeader.split(" ").pop();

    TokenModel.validateToken( token, (err)=>{ 
        
        response.status(401).send({
            message: "This is a protected resource. Please login first."
        });

    }, (payload)=>{

        next();

    });

}