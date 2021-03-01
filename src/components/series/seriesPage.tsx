import React from 'react';
import {
  Row,
  Col,
  Form,
  Button,
  CardDeck,
  Card,
  CardGroup,
} from 'react-bootstrap';
import './style.scss';
import unnamed from '../../data/icon/unnamed.jpg';

export default function SeriesPage(props: {}) {
  let test = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'url(https://www.wholelifechallenge.com/wp-content/uploads/2018/06/e-book-header.jpg)',
      height: '28vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },

    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
  };

  return (
    <>
      <div style={test.header}>
        <h2>Series</h2>
      </div>

      <div className="seriesBody">
        <div className="filter">
          <Form>
            <Row>
              <Col>
                <Form.Control as="select" defaultValue="Choose..." value="">
                  <option value="">Show All...</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control placeholder="Search Series..." />
              </Col>
            </Row>
          </Form>
        </div>
        <CardDeck>
          <Card className="sCards">
            <Card.Img
              variant="top"
              width="100%"
              src={unnamed}
              className="card-image-top"
            ></Card.Img>
            <Card.Body className="scBody">
              <Card.Title className="scTitle">Series</Card.Title>
              <Card.Text>
                Baby Shark Do do Do do do do
                <p>Baby Shark Do do Do do do do</p>
              </Card.Text>
              <Card.Footer className="scFooter">Authors name</Card.Footer>
            </Card.Body>
          </Card>
          <Card className="sCards">
            <Card.Img
              variant="top"
              width="100%"
              src={unnamed}
              className="card-image-top"
            ></Card.Img>
            <Card.Body className="scBody">
              <Card.Title className="scTitle">Series</Card.Title>
              <Card.Text>
                Baby Shark Do do Do do do do
                <p>Baby Shark Do do Do do do do</p>
              </Card.Text>
              <Card.Footer className="scFooter">Authors name</Card.Footer>
            </Card.Body>
          </Card>
          <Card className="sCards">
            <Card.Img
              variant="top"
              width="100%"
              src={unnamed}
              className="card-image-top"
            ></Card.Img>
            <Card.Body className="scBody">
              <Card.Title className="scTitle">Series</Card.Title>
              <Card.Text>
                Baby Shark Do do Do do do do
                <p>Baby Shark Do do Do do do do</p>
              </Card.Text>
              <Card.Footer className="scFooter">Authors name</Card.Footer>
            </Card.Body>
          </Card>
          <Card className="sCards">
            <Card.Img
              variant="top"
              width="100%"
              src={unnamed}
              className="card-image-top"
            ></Card.Img>
            <Card.Body className="scBody">
              <Card.Title className="scTitle">Series</Card.Title>
              <Card.Text>
                Baby Shark Do do Do do do do
                <p>Baby Shark Do do Do do do do</p>
              </Card.Text>
              <Card.Footer className="scFooter">Authors name</Card.Footer>
            </Card.Body>
          </Card>
          <Card className="sCards">
            <Card.Img
              variant="top"
              width="100%"
              src={unnamed}
              className="card-image-top"
            ></Card.Img>
            <Card.Body className="scBody">
              <Card.Title className="scTitle">Series</Card.Title>
              <Card.Text>
                Baby Shark Do do Do do do do
                <p>Baby Shark Do do Do do do do</p>
              </Card.Text>
              <Card.Footer className="scFooter">Authors name</Card.Footer>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    </>
  );
}
