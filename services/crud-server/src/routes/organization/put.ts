import { OrganizationModel, IOrgUpdatedRequest } from '../../models/organization';

export async function put( app:any ){

    app.put("/organization", async ( request:any, response:any ) => {
        // read Organization from post body
        const Organization:IOrgUpdatedRequest = request.body;

        // console.log( " ++++++ /organization " + Organization)
        const updatedOrg = await OrganizationModel.update(Organization)
        // send successful response
        response.status(200).send(updatedOrg);

    });

}