import React, { useEffect, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useArticleList } from './articleList';
import { ISeries } from '../../../services/crud-server/src/models/series';
import { ISearchFilter } from '../series/seriesPage';
import { IArticle } from '../../../services/crud-server/src/models/article';
import ArticleFilter from './ArticleFilter.ts/articleFilter';
import './style.scss';

export interface IASearchFilter {
  name?: string;
  author?: string;
  category?: string;
}

export default function HorizontalArticles(props: { rows: number }) {
  const { articleList, setArticleList } = useArticleList();
  // Only allows published/approved articles to be displayed
  const approvedArticle = articleList.filter((a) => a.art_is_approved === 1);
  const history = useHistory();
  const [articleCol, setArticleCol] = useState<Array<IArticle[]>>([]);
  const [ASearchFilter, setASearchFilter] = useState<IASearchFilter>({});

  // Allows only users that are authors in the database to create a new article
  let isAuthor = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem('user_type'));
    if ((userType != 1 && userType != 4) || !userType) {
      alert('You must be an author to create an article');
    } else {
      return history.push('/newArticle');
    }
  };

  useEffect(() => {
    const innerProductList = [...approvedArticle].filter((articles) => {
      let found = true;

      if (ASearchFilter?.name) {
        found = articles.art_title.includes(ASearchFilter.name);
      }

      if (ASearchFilter?.category) {
        found = found && articles.art_category.includes(ASearchFilter.category);
      }

      return found;
    });
    const col = [];

    while (innerProductList.length && col.length < (props.rows || 5)) {
      col.push(innerProductList.splice(0, 5));
    }

    setArticleCol(col);
  }, [props.rows, ASearchFilter]);

  return (
    <MainLayout>
      <Row className="CardFeatured">
        <Col>
          <CardDeck>
            <Card className="cardStyle">
              <Card.Header className="cardHeader">
                The card styling for all articles will be changed.
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <a href=""> See more </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>

      {<ArticleFilter aSearchDispatch={setASearchFilter} />}

      <Row></Row>
      {articleCol.map((col) => {
        return (
          <div>
            {col.map((art, index) => (
              <div key={index}>
                <Card className="Card">
                  <Card.Header className="CardHeader">
                    {' '}
                    <Link to={`/articles/${art.art_title}`}>
                      {art.art_title}
                    </Link>
                    <div>
                      {' '}
                      Author: {art.user_firstName} {''}
                      {art.user_lastName}{' '}
                    </div>

                  </Card.Header>

                  <Card.Body className="CardBody">
                    <Card.Text className="CardText">
                      {art.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="acFooter">
                    {art.art_category}
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        );
      })}
    </MainLayout>
  );
}
