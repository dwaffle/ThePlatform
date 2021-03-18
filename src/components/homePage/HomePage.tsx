import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
//import Faq from '../components/OrganizationPage';
import './style.scss';

export default function HomePage(props: {}) {

  let background = {
    header: {
      background: 'rgba(0, 0, 0, 0.5)',
      backgroundImage:
        'url(https://assets.weforum.org/article/image/TmPdNlFv0WnroKsD8LqWVj0al8UlbVlFb1B8ngDfz8A.jpg)',
      height: '100vh',

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
    <div /*style={background.header}*/>
    <Row>
        <Col xs={8}>
          {' '}
          <div className="HeadlineArticle">
            <h1> HeadlineArticle </h1>
          </div>{' '}
        </Col>
        <Col>
          <div className="MostPopularArticle">
            <h2> Most Popular Article </h2>
          </div>
        </Col>
      </Row>

      <div>
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
      </div> */
    </div>
      
    </>
  );
}

