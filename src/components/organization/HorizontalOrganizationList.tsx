import React from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
//import Faq from '../components/OrganizationPage';
import './style.scss';

// export interface IOrganization {
//     name: string;
//     description: string;
// }

export default function HorizontalOrganizationList(props: {}) {
  return (
    <>
      {' '}
      <div className="horizontal-organization-list">
        {/* Search | Filters */}
        <Form>
          <Row>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." value="">
                <option value="">Show All...</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="Search Product Name..." value="" />
            </Col>
            <Col></Col>
            {/* Create a new organization */}
            <Col>
              {' '}
              <Button href="/NewOrganizationPage">Create New</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="search-filter">
        <Row>
          <Col>
            <CardDeck>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header className="text-center p-3">
                  Organization Name
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Primary Card Title</Card.Title> */}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <a href=""> See more </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header className="text-center p-3">
                  Organization Name
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Primary Card Title</Card.Title> */}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <a href=""> See more </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header className="text-center p-3">
                  Organization Name
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Primary Card Title</Card.Title> */}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <a href=""> See more </a>
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header className="text-center p-3">
                  Organization Name
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Primary Card Title</Card.Title> */}
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                    <br />
                    <a href=""> See more </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </div>
    </>
  );
}
