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
  // all articles
  const { articleList, setArticleList } = useArticleList();

  // const dateNow = new Date();
  // console.log('datenow', dateNow);

  //find the newest series
  const newestSeries = seriesList[seriesList.length - 1];

  // gets newest article
  const newestArticle = articleList[articleList.length - 1];
  
  // const latestSeries = seriesList.sort((objA, objB) => objA.ser_creationDate.getTime() - dateNow;
  return (
    <>
      <Row>
        <Col xs={8}>
          {' '}
          <div className="HeadlineArticle">
            <h1> {newestArticle.art_title} </h1>
            <p>
              written by:{newestArticle.user_userName}
            </p>
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
