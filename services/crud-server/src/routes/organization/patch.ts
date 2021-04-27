
import { OrganizationModel, IOrgModificationRequest } from '../../models/organization';

export async function patch( app:any ){

    app.patch("/organization", async ( request:any, response:any ) => {
        // read payload from post body
        const payload:IOrgModificationRequest = request.body;
        const usersInOrg = await OrganizationModel.addOrRemoveUser(payload)
        // send successful response
        response.status(200).send(usersInOrg);

    });

   

}