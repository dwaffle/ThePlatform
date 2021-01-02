import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  CardDeck,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { IArticle } from "../../../services/crud-server/src/models/article";
import api from "../../api";

import "./style.scss";

export default function PendingArticleList(props: { rows: number }) {
  const [article, setArticle] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticle();
  }, []);

  const getArticle = () => {
    api.article
      .get()
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // const rows= [];

  //     while( rows.length < (props.rows||1) ){
  //         rows.push( article);
  //     }

  //     console.log(rows)

  function ShowArticleOnClick() {}

  return (
    <>
      <div className="PendingArticle">
        <h5>Articles pending approval : </h5>
        <Row>
          <Col>
            <Table striped bordered hover variant="warning">
              <thead className="thead">
                <tr>
                  <th>Articles</th>
                  <th>Author</th>
                  {/* <th>State</th> */}
                </tr>
              </thead>
              <tbody>
                {article.map((art) => (
                  <tr
                    key={art.art_id}
                    onClick={ShowArticleOnClick}
                    defaultValue={art.art_id}
                  >
                    <td>{art.art_title}</td>
                    <td>{art.user_author}</td>
                    {/* <td> State</td> */}
                    {/* <td> <Link to="/articles/:articleId">{art.art_title}</Link></td> */}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </>
  );
}