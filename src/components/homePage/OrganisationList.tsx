import { useEffect, useState } from 'react';
import { Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import api from '../../api';

export default function OrganisationList() {
  const [orgs, setOrgs] = useState<IOrganization[]>([]);

  useEffect(() => {
    api.organization.get().then((response) => {
      setOrgs(response.data);
    });
  }, []);

  return (
    <>
      <div className="orgDiv">
        <CardDeck>
          {orgs.slice(0, 4).map((_org) => {
            return (
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header className="text-center p-3">
                  {_org?.org_title}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {_org?.org_desc}
                    <br />
                    <Link to={`/IndividualOrganizationPage/${_org.ord_id}`}>
                      See more
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </CardDeck>
      </div>
    </>
  );
}
