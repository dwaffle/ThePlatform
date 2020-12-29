import React, { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import { Row, Col, Button, Form, Card, CardDeck } from "react-bootstrap";
import { Link, useHistory, Route, Switch } from "react-router-dom";
import IndividualArticle from "./IndividualArticle";
import {useArticleList} from './articleList'

export default function HorizontalArticles(props: { rows: number }) {

  const { articleList, setArticleList } = useArticleList();
  const history = useHistory();

  let isAuthor = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem("user_type"));
    if (userType != 1) {
      alert("You must be an author to create an article");
    } else {
      return history.push("/newArticle");
    }
  };

  return (
    <MainLayout>
      <Row className="CardFeatured">
        <Col>
          <CardDeck>
            <Card className="cardStyle">
              <Card.Header className="cardHeader">
                Godzilla strikes again!
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
            <Card bg="Light" style={{ width: "15rem" }}>
              <Card.Header className="cardHeader">
                Adam Sandler defeats Godzilla
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

      <div>
        <Form>
          <Row>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." value="">
                <option value="">Show All...</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="Search Articles..." value="" />
            </Col>
            <Col>
              {" "}
              <Button onClick={isAuthor}>Create New</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="viewArticles">
        {articleList.map((art, index) => (
          <div key={index}>
            <Card className="Card">
              <Card.Header className="CardHeader">
                {" "}
                <Link to={`/articles/${art.art_id}`}>{art.art_title}</Link>
                <div> Author:{art.user_author} </div>
              </Card.Header>

              <Card.Body className="CardBody">
                <Card.Text className="CardText">{art.description}</Card.Text>
              </Card.Body>
            </Card>

            <Switch>
              <Route path="arrticles/:id" children={<IndividualArticle />} />
            </Switch>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

//   useEffect(() => {

//     const innerProductList = [ ...article ].filter(( article ) => {

//       let found = true;

//       return found;

//     });
//     const rows = [];

//     while( innerProductList.length && rows.length < (props.rows||1) ){
//         rows.push( innerProductList.splice(0,4));
//     }

//     setArticleRows( rows );

// }, [ props.rows ]);
