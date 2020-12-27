import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { IArticle } from "../../../services/crud-server/src/models/article";
import Rating from "react-rating";
import api from "../../api";
import "./style.scss";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";

const IndividualArticle = () => {
  const [article, setArticle] = useState<IArticle[]>([]);
  const [rating1, setRating1] = useState(0);
  // const [unoArticle, setOneArticle] = useState<IArticle>();
  const params = useParams<{ id: any }>();

  let oneArticle = article.find((art) => art.art_id /*=== params.id*/);

  useEffect(() => {
    api.article
      .get()
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  return (
    <MainLayout>
      <Container className="ContainerPosition">
        <Row className="articleTitle"> {oneArticle?.art_title} </Row>
        <Row className="articleAuthor"> {oneArticle?.user_author} </Row>
        <Row>
          <Col> Fiction </Col>
        </Row>

        <Row>
          <Col>
            <Rating
              initialRating={rating1}
              onClick={(rate) => setRating1(rate)}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            {" "}
            <button type="submit">$5.99</button>{" "}
          </Col>
        </Row>

        <Row>
          <Col>Description</Col>
        </Row>
        <Row className=" articleDesc ">
          <Col>{oneArticle?.description}</Col>
        </Row>

        <Row>
          <Col>Body</Col>
        </Row>
        <Row className="articleBody">
          <Col>{oneArticle?.art_body}</Col>
        </Row>

        <Row>
          <Col className="statistics">1 Viewer</Col>
          <Col className="series"> Hubies Blog </Col>
          <Col className="tags"> Godzilla, NYC, Destruction </Col>
        </Row>
      </Container>
    </MainLayout>
  );
};

export default IndividualArticle;
