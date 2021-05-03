// import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
import { useRecoilValue } from 'recoil';
import { ISeries } from '../../../services/crud-server/src/models/series';
import { seriesListState, useArticleList } from '../ArticleList/articleList';

import Headline from './HeadlineArticle';
import Popular from './PopularArticle';
import Organisation from './OrganisationList';

//import Faq from '../components/OrganizationPage';
import './style.scss';

export default function HomePage(props: {}) {
  // all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  //  const test = seriesList.sort((a,b) => new Date(b.ser_creationDate).getTime() - new Date(a.date).getTime())[0];
  // all articles
  const { articleList, setArticleList } = useArticleList();

  const dateNow = new Date();
  console.log('datenow', dateNow);

  //find the newest series
  //not finding the latest, yet.
  const newestSeries = seriesList.find((s) => s.ser_creationDate);
  console.log('newest series? ', newestSeries?.ser_creationDate);

  //not finding the latest, yet.
  const newestArticle = articleList.find((a) => a.art_creationDate);
  // // console.log("newest Article?", newestArticle)
  // const last artID

  // const latestSeries = seriesList.sort((objA, objB) => objA.ser_creationDate.getTime() - dateNow;
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
