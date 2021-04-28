import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { ISeries } from '../../../../services/crud-server/src/models/series';
import MainLayout from '../../../layouts/MainLayout';
import {
  Card,
  CardDeck,
  Col,
  Form,
  Row,
  Button,
  ListGroup,
  Badge,
} from 'react-bootstrap';
import {
  articleListState,
  seriesListState,
} from '../../ArticleList/articleList';
import './style.scss';
import series from '../../../api/series';
import { Link } from 'react-router-dom';
function IndividualSeries() {
  // assigns an id to one article
  const params = useParams<{ id: string }>();
  // all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  // single series
  const [singleSeries, setSingleSeries] = useState<ISeries>();
  // list of all the articles, to be used to find articles in a series
  const articles = useRecoilValue<IArticle[]>(articleListState);
  // const user_ID = Number(localStorage.getItem('user_id'));

  const artInSeries = articles.filter(
    (o) => o.series_id == singleSeries?.series_id,
  );

  useEffect(() => {
    setSingleSeries(seriesList.find((s) => s.series_title === params.id));
  }, [params.id]);

  return (
    <MainLayout>
      <div className="iSeriesHeader">
        <h1>{singleSeries?.series_title}</h1>
        {/* <Row> 
          <Col> Rating </Col>
          <Col>By: {singleSeries?.series_owner}</Col> 
          
        </Row> */}
        <p className="iSAuthor"> By: {singleSeries?.series_owner} </p>
        <p className="iSDescription">{singleSeries?.series_desc}</p>
      </div>

      <div className="iAList">
        {/* All the articles in this series: */}
        {artInSeries.map((art) => (
          <Card className="iSCard">
            <Card.Header className="iaTitle">
              <Link className="titleLink" to={`/articles/${art.art_title}`}>
                {art.art_title}
              </Link>
            </Card.Header>
            <Card.Body className="iaDesc">{art.description}</Card.Body>
            <Card.Footer className="iaFooter">
              <Badge className={`tag-${art.art_category}`}>
                {art.art_category}
              </Badge>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
}

export default IndividualSeries;
