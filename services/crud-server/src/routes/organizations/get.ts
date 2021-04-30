import { authenticateToken } from '../../middleware/authenticator';
import { OrganizationModel } from '../../models/organization';

export function get( app:any ){

    app.get("/organization", authenticateToken, async( request:any, response:any ) => {

        const orgs = await OrganizationModel.getOrgUsers(0);
        response.status(200).send(orgs);

    });
}