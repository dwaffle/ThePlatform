
import { OrganizationModel, IOrgModificationRequest } from '../../models/organization';

export async function patch( app:any ){

    app.patch("/organizationUserChange", async ( request:any, response:any ) => {
        // read payload from post body
        const payload:IOrgModificationRequest = request.body;
        OrganizationModel.changeUserRole(payload);
        // send successful response
        response.status(200).send();

    });

}