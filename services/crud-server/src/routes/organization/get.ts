import { authenticateToken } from '../../middleware/authenticator';
import { OrganizationModel } from '../../models/organization';

export function get( app:any ){

    app.get("/organizations", authenticateToken, async( request:any, response:any ) => {

        const orgs = await OrganizationModel.getAll();
        response.status(200).send(orgs);

    });

}