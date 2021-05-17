import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import FeatureCarousel from './myCarousel';

export default function LandingPage() {
  const history = useHistory();

  function getStarted() {
    return function () {
      history.push(`/login`);
    };
  }

  function getArticles() {
    return function () {
      history.push(`/articles`);
    };
  }

  return (
    <>
      <div className="landing-section">
        <Row>
          <div className="landing-info">
            <Col>
              <h2>Where good Articles find you</h2>
              <br />
              <h4>
                Read, add your Article on just about any topic. Everyone’s
                welcome.
              </h4>
              <br />
              <Button onClick={getStarted()} variant="outline-danger">
                {' '}
                Get Started
              </Button>
              <Button onClick={getArticles()} variant="outline-danger">
                {' '}
                Articles List
              </Button>
            </Col>
          </div>

          <Col>
            <FeatureCarousel />
          </Col>
        </Row>
      </div>
    </>
  );
}
