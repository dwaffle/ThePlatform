
import { IOrganization, OrganizationModel } from '../../models/organization';

export async function post( app:any ){

    app.post("/organization", async ( request:any, response:any ) => {

        // read payload from post body
        const payload = request.body;
        const usersInOrg = await OrganizationModel.getOrgUsers(payload.id)
        // send successful response
        response.status(200).send(usersInOrg);

    });

}