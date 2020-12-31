import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import MainLayout from "../../layouts/MainLayout";
import { IArticle } from "../../../services/crud-server/src/models/article";
import Rating from "react-rating";
import "./style.scss";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { articleListState } from "./articleList";

const IndividualArticle = () => {
  const [rating1, setRating1] = useState(0);
  const params = useParams<{ id: any }>();
  const art = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  return (
    <MainLayout>
      <section>
        <h1> {article?.art_title}</h1>
        <h4>Author: {article?.user_author} </h4>

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
          <img src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"></img>
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
      </section>
    </MainLayout>
  );
};

export default IndividualArticle;
