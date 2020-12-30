import React, { useState, useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import MainLayout from "../../layouts/MainLayout";
import { IArticle } from "../../../services/crud-server/src/models/article";
import Rating from "react-rating";
import "./style.scss";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { articleListState, useArticleList } from "./articleList";
import Card from 'react'

const IndividualArticle = () => {
  const { articleList, setArticleList } = useArticleList();
  const [rating1, setRating1] = useState(0);
  const params = useParams<{ id: any }>();
  const art = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();
  console.log(article)
  
  

  useEffect(() => {
    setArticle(articleList.find(_art => _art.art_id));
  }, [params.id])

  
  

  return (
    <MainLayout>
      <Container className="ContainerPosition">
        <Row className="articleTitle"> {article?.art_title} </Row>
        <Row className="articleAuthor"> {article?.user_author} </Row>
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
          <Col>{article?.description}</Col>
        </Row>

        <Row>
          <Col>Body</Col>
        </Row>
        <Row className="articleBody">
          <Col>{article?.art_body}</Col>
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
