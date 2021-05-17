import { Row, Col } from 'react-bootstrap';
import Headline from './HeadlineArticle';
import Popular from './PopularArticle';
import Organisation from './OrganisationList';
import Landing from './LandingPage';
import './style.scss';

export default function HomePage(props: {}) {
  return (
    <>
      <Row>
        <Col>
          <Landing />
        </Col>
      </Row>
      <Row>
        <Col>
          <Headline />
        </Col>
        <Col>
          <Popular />
        </Col>
      </Row>
      <Row>
        <Col>
          <Organisation />
        </Col>
      </Row>
    </>
  );
}
