import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import MainLayout from "../../layouts/MainLayout";
import { IArticle } from "../../../services/crud-server/src/models/article";
import Rating from "react-rating";
import "./style.scss";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { articleListState } from "./articleList";
import google from "../../data/icon/google.png";
import facebook from "../../data/icon/facebook.png";
import instagram from "../../data/icon/instagram.png";
import twitter from "../../data/icon/twitter.png";
import { Link } from "react-router-dom";

const IndividualArticle = () => {
  const [rating1, setRating1] = useState(0);
  const params = useParams<{ id: string }>();
  const art = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  function getRating() {
    // code that will display rating and allow users to rate the article
  }

  return (
    <MainLayout>
      <section>
        <h1> {article?.art_title}</h1>
        <h4>
          Author: {article?.user_firstName} {article?.user_lastName}
        </h4>

        <div className="Rating">
          <Rating
            initialRating={rating1}
            onClick={(rate) => setRating1(rate)}
          />
          <div>
            <button type="submit">${article?.art_price}</button>{" "}
          </div>
        </div>

        <div>
          <img
            className="artImage"
            src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"
          ></img>
        </div>

        <div>
          {" "}
          Description:
          <div className="description">{article?.description}</div>
        </div>

        <div className="body">{article?.art_body}</div>

        <Row>
          <Col className="Col">1 Viewer</Col>
          <Col className="Col"> No Series </Col>
          <Col className="Col"> Godzilla, NYC, Destruction </Col>
        </Row>

        <Row className="socialMedia">
          <a href="http://www.facebook.com/" target="_blank">
            <img src={facebook}></img>
          </a>
          <a href="http://www.twitter.com/" target="_blank">
            <img src={twitter}></img>
          </a>
          <a href="http://www.instagram.com/" target="_blank">
            <img src={instagram}></img>
          </a>
        </Row>
      </section>
    </MainLayout>
  );
};

export default IndividualArticle;
