import React, { useState, useEffect } from "react";
import { articleListState } from "../ArticleList/articleList";
import { IArticle } from "../../../services/crud-server/src/models/article";
import { useRecoilValue } from "recoil";

import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  CardDeck,
  ButtonGroup,
} from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";
import RejectArticle from "./RejectArticle";
import SelectedArticleList from "./SelectedArticle";

export default function EditorPage() {
  const [article, setArticle] = useState<IArticle>();
  console.log("article", article);
  
  const articleList = useRecoilValue<IArticle[]>(articleListState);
  console.log(articleList);

  // It's currently targetting the entire <tr> instead of the article you want to select

  const ShowArticleOnClick = (e: any) => {
    const selectedArticle = articleList[(e.currentTarget.rowIndex) - 1] //Arrays start at 0.  Row indexes start at 1.
    console.log("Selected article: " + selectedArticle)
    setArticle(selectedArticle);
  };

  
  return (
    <MainLayout>
      <Row>
        <Col>
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
                    {articleList.map((art) => (
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

          <Button variant="primary" block>
            {" "}
            Select Article
          </Button>
        </Col>
        <Col xs={8}>
          <div className="SelectedArticle">
            <h2> Selected Article </h2>
            <br />
            <CardDeck>
              <Card bg="Light" style={{ width: "18rem" }}>
                <Card.Header> {article?.art_title}</Card.Header>
                <Card.Body>
                  <Card.Title>author : Test (Price : Test CAD)</Card.Title>
                  <Card.Text>
                    Description :<br />
                    Test
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <RejectArticle />
          <Row>
            <Col xs={7}>
              <Button variant="primary" block>
                Reject Article{" "}
              </Button>
              <Button variant="primary" block>
                Approve Article
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
  );
}
