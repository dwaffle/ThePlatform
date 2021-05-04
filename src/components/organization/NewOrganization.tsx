import { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import api from '../../api';
<<<<<<< HEAD
// import { IOrganization } from '../../../services/crud-server/src/models/organization';
//import Faq from '../components/OrganizationPage';
=======
>>>>>>> 250986856bdb175eacc038dbd1953211362d04ed
import './style.scss';
import { useHistory } from 'react-router-dom';

export default function NewOrganizationForm(props: {}) {
  const [orgName, setOrgName] = useState<string>();
  const [orgPrice, setOrgPrice] = useState<string>();
  const [orgDesc, setOrgDesc] = useState<string>();
  const history = useHistory();

  function submitHandler() {
    console.log(orgName);
    const empty = /^\s+$/;
    //Make sure we have an org name and price before submitting.  0 for free orgs, any other number greater than 0 for paid orgs.
    //Decided to handle seperating free/non-free on the back end by checking for a price >= 0.
    if (
      orgName != undefined &&
      !orgName.match(empty) &&
      orgPrice != undefined &&
      !orgPrice.match(empty) &&
      Number(orgPrice) >= 0 &&
      orgDesc != undefined &&
      !orgDesc.match(empty)
    ) {
      const user = window.localStorage.getItem('user_id');
      const orgToSubmit = {
        org_creator: user,
        org_title: orgName,
        org_price: orgPrice,
        org_desc: orgDesc,
        user_id: user,
      };
      api.organization.post(orgToSubmit);
      history.push('/organization');
    } else {
      alert(
        'Your organization must have a name, price (0 for free organizations), and description.',
      );
    }
  }

  let artListHeader = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage: 'url(https://i.imgur.com/8KnwPfd.png)',
      height: '32vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      // transparency: '50%'
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <>
      <div style={artListHeader.header}>
        <p className="h8tch2">Create Organization</p>
      </div>
      <Row>
        <Col>
          <div className="Container">
            <Form className="FormLogin">
              <h1 className="LoginLabel">Create Org</h1>

              <Form.Group controlId="formOrgCreation">
                <Form.Label>Org Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Org Name"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                />
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  value={orgPrice}
                  onChange={(e) => setOrgPrice(e.target.value)}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description of your organization"
                  value={orgDesc}
                  onChange={(e) => setOrgDesc(e.target.value)}
                />
                <Button onClick={submitHandler}>Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
