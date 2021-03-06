import { useEffect, useState } from 'react';
import { Row, Col, CardDeck, Card, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import api from '../../api';

export default function OrganizationSide(props: {}) {
  const history = useHistory();
  const [orgs, setOrgs] = useState<IOrganization[]>([]);

  const [selectedOrg, setSelectedOrg] = useState<IOrganization>();

  function onClick(selected: IOrganization) {
    return function () {
      setSelectedOrg(selected);
    };
  }

  useEffect(() => {
    api.organization.get().then((response) => {
      setOrgs(response.data);
    });
  }, []);

  let approvedOrRejected = (e: any) => {
    const status = e.target.value;

    if (selectedOrg && status != selectedOrg.org_status) {
      e.preventDefault();
      const otherOrgs = orgs.filter(
        (_orgs) => _orgs.ord_id != selectedOrg.ord_id,
      );
      selectedOrg.org_status = status;
      setOrgs([...otherOrgs, selectedOrg]);
      history.push('/admin');
    } else if (
      status == selectedOrg?.org_status &&
      selectedOrg?.org_status == 0
    ) {
      alert("Please choose another organization, you can't ban it again.");
    } else if (
      status == selectedOrg?.org_status &&
      selectedOrg?.org_status == 1
    ) {
      alert(
        'Please choose another organization, this organization is already approved',
      );
    } else {
      alert('Please choose an organization to start.');
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h3>Organization List</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Status</th>
            </thead>
            <tbody>
              {orgs?.map((org) => {
                return (
                  <tr
                    className="adminTable"
                    key={org.ord_id}
                    defaultValue={org.ord_id}
                    onClick={onClick(org)}
                  >
                    <td> {org.org_title}</td>
                    <td>{org.org_desc}</td>
                    <td>{org.org_price}</td>
                    <td>{org.org_status === 1 ? 'active' : 'inactive'}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Button
            variant="primary"
            block
            value="0"
            name="statusOrg"
            onClick={approvedOrRejected}
          >
            Deactivate Organization
          </Button>

          <Button
            variant="primary"
            block
            value="1"
            name="statusOrg"
            onClick={approvedOrRejected}
          >
            Activate Organization
          </Button>
        </Col>

        <Col xs={8}>
          <CardDeck>
            <Card bg="Light" style={{ width: '18rem' }}>
              <Card.Header>Selected Organization </Card.Header>
              <Card.Body>
                <Card.Title>{selectedOrg?.org_title} </Card.Title>
                <Card.Text>{selectedOrg?.org_desc} </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </>
  );
}
