import React from 'react';
import { Rating } from '@material-ui/lab';
import { Card, CardDeck, Col, Form, Row, Button } from 'react-bootstrap';
import unnamed from '../../data/icon/unnamed.jpg';
import { Link, useHistory } from 'react-router-dom';
import './style.scss';

export default function SeriesPage(props: {}) {
  function seriesLink() {
    return history.push('/seriesCreation');
  }
  const history = useHistory();

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

      <Button variant="primary" onClick={seriesLink}> Series Creation </Button>

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
              <Rating name="half-rating" defaultValue={2.5} precision={1} />
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
              <Rating name="half-rating" defaultValue={2.5} precision={1} />
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
              <Rating name="half-rating" defaultValue={2.5} precision={1} />
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
              <Rating name="half-rating" defaultValue={2.5} precision={1} />
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
              <Card.Title className="scTitle">
                <Link to={`/articles/series`}>Series</Link>
              </Card.Title>
              <Rating name="half-rating" defaultValue={2.5} precision={1} />
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
