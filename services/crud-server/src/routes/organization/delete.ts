import { authenticateToken } from '../../middleware/authenticator';
import { OrganizationModel } from '../../models/organization';

export function remove( app:any ){

    app.delete("/organization/:orgId", authenticateToken, async( request:any, response:any ) => {
        console.log(request.params.orgId);
        const orgToDelete = request.params.orgId
        const orgs = await OrganizationModel.delete(orgToDelete)
        response.status(200).send(orgs);

    });

}