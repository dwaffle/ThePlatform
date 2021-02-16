import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import './style.scss';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useArticleList } from './articleList';

export default function HorizontalArticles(props: { rows: number }) {
  const { articleList, setArticleList } = useArticleList();
  // Only allows published/approved articles to be displayed
  const approvedArticle = articleList.filter((a) => a.art_is_approved === 1);
  const history = useHistory();

  // Allows only users that are authors in the database to create a new article
  let isAuthor = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem("user_type"));
    if ((userType != 2 && userType != 4) || !userType) {
      alert("You must be an author to create an article");
    } else {
      return history.push('/newArticle');
    }
  };

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

      <div className="filter">
        <Form>
          <Row>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." value="">
                <option value="">Show All...</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="Search Articles..." />
            </Col>
            <Col>
              {' '}
              <Button onClick={isAuthor}>Create New</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <Row></Row>
      <div className="viewArticles">
        {approvedArticle.map((art, index) => (
          <div key={index}>
            <Card className="Card">
              <Card.Header className="CardHeader">
                {' '}
                <Link to={`/articles/${art.art_title}`}>{art.art_title}</Link>
                <div>
                  {' '}
                  Author: {art.user_firstName}
                  {art.user_lastName}{' '}
                </div>
              </Card.Header>

              <Card.Body className="CardBody">
                <Card.Text className="CardText">{art.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
