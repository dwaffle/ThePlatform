// import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { ISeries } from '../../../services/crud-server/src/models/series';
import { seriesListState, useArticleList } from '../ArticleList/articleList';
//import Faq from '../components/OrganizationPage';
import './style.scss';

export default function HomePage(props: {}) {
  // all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  //  const test = seriesList.sort((a,b) => new Date(b.ser_creationDate).getTime() - new Date(a.date).getTime())[0];
  // all articles
  const { articleList, setArticleList } = useArticleList();

  const dateNow = new Date ();
  console.log("datenow", dateNow)


  //find the newest series
  //not finding the latest, yet.
  const newestSeries = seriesList.find( s => s.ser_creationDate)
  console.log("newest series? ", newestSeries?.ser_creationDate)

  //not finding the latest, yet.
  const newestArticle = articleList.find( a => a.art_creationDate);
  // console.log("newest Article?", newestArticle)

  // const latestSeries = seriesList.sort((objA, objB) => objA.ser_creationDate.getTime() - dateNow;
  return (
    <>
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
                  {newestSeries?.series_title}
                </Card.Header>
                <Card.Body>
                  {/* <Card.Title>Primary Card Title</Card.Title> */}
                  <Card.Text>
                    {newestSeries?.series_desc}
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
