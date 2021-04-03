
import { IOrganization, OrganizationModel } from '../../models/organization';

export function post( app:any ){

    app.post("/organization", ( request:any, response:any ) => {

        // read payload from post body
        const payload = request.body;
        

        // send successful response
        response.status(201).send();

    });

}