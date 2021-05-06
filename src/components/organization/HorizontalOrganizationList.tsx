import { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Card, Table } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import api from '../../api';
import { useHistory } from 'react-router-dom';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import 'react-multi-carousel/lib/styles.css';
import './style.scss';

// export interface IOrganization {
//     name: string;
//     description: string;
// }

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1320 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1319, min: 1004 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 1003, min: 685 },
    items: 2,
  },
  supersmall: {
    breakpoint: { max: 684, min: 0 },
    items: 1,
  },
};

export default function HorizontalOrganizationList(props: {}) {
  const [allOrgs, setAllOrgs] = useState<IOrganization[]>();
  const [orgsWithUsers, setOrgsWithUsers] = useState<IOrganization[]>();
  const history = useHistory();
  const thisUser = window.localStorage.getItem('user_id');

  useEffect(() => {
    api.organization.get().then((response) => {
      setAllOrgs(response.data);
    });
    const user = Number(window.localStorage.getItem('user_id'));
    api.orgs.post(user).then((response) => {
      setOrgsWithUsers(response.data);
      console.log(response.data);
    });
  }, []);

  function onClickHandler(id: number) {
    return function () {
      history.push(`/IndividualOrganizationPage/${id}`);
    };
  }

  function showCreateOrgButton() {
    const id = window.localStorage.getItem('user_type');
    if (Number(id) !== 2 && id != null) {
      return (
        <Button href="/NewOrganizationPage" className="new-org-button" variant="success">
          Create New
        </Button>
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
      {' '}
      <div style={artListHeader.header}>
        <p className="h8tch2">Organizations</p>
      </div>
      <div className="horizontal-organization-list">
        <Form>
          <Row>
            <Col> {showCreateOrgButton()}</Col>
          </Row>
        </Form>
      </div>
      <div className="search-filter">
        <Row>
          <Col>
            <Carousel responsive={responsive}
            
            >
              {allOrgs ? (
                allOrgs.map((data) => {
                  return (
                    <Card
                      bg="Light"
                      className="org-card"
                      style={{ width: '18rem' }}
                    >
                      <Card.Header className="text-center">
                        {data.org_title}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          {data.org_desc}
                          <br />
                          <Button
                            className="view-org-button"
                            onClick={onClickHandler(data.ord_id)}
                          >
                            View Org
                          </Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  );
                })
              ) : (
                <div>
                  Please <a href="/login">log in</a> or{' '}
                  <a href="/signup">sign up</a> to see organizations.
                </div>
              )}
            </Carousel>
          </Col>
        </Row>
      </div>
      <Row>
        <Col>
          <div className="trending-organization">
            <h3>Your Organizations</h3>
            <Table striped bordered hover variant="info">
              <thead>
                <tr>
                  <th>Organizations</th>
                </tr>
              </thead>
              <tbody>
                {orgsWithUsers ? (
                  orgsWithUsers?.map((data) => {
                    if (data.user_id === Number(thisUser))
                      return (
                        <tr onClick={onClickHandler(data.ord_id)}>
                          <td>{data.org_title}</td>
                        </tr>
                      );
                  })
                ) : (
                  <tr>
                    <td>You must be logged in to view organizations</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}
