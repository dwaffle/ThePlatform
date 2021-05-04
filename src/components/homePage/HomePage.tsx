import { Row, Col } from 'react-bootstrap';
import Headline from './HeadlineArticle';
import Popular from './PopularArticle';
import Organisation from './OrganisationList';

import './style.scss';

export default function HomePage(props: {}) {
  return (
    <>
      <Row>
        <Col xs={8}>
          <Headline />
        </Col>
        <Col>
          <Popular />
        </Col>
      </Row>

      <div>
        <Row>
          <Col>
            <Organisation />
          </Col>
        </Row>
      </div>
    </>
  );
}
