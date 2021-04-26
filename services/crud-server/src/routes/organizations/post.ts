
import { IOrganization, OrganizationModel } from '../../models/organization';

export function post( app:any ){

    app.post("/organizations", ( request:any, response:any ) => {

        // read payload from post body
        const payload:IOrganization = request.body;
        OrganizationModel.create(payload)

        // send successful response
        response.status(201).send();

    });

}