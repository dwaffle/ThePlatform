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
import api from "../../api";

export default function EditorPage() {
  const articleList = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();
  console.log("article", article)
  const [artState, setArtState] = useState<IArticle>();
  console.log(artState)

  let pendingArticle = articleList.filter (a => a.art_is_approved == 0)
  
  // It's currently targetting the entire <tr> instead of the article you want to select
  const ShowArticleOnClick = (e: any) => {
    const selectedArticle = pendingArticle[(e.currentTarget.rowIndex) - 1] //Arrays start at 0.  Row indexes start at 1.
    setArticle(selectedArticle);
  };



  let approvedOrRejected = (e:any) => {
    let articleState = e.target.value
    setArtState(articleState);
  };

  function patchArticle (e:any) {
    e.preventdefault();
    let updatedArticle = {
      art_is_approved: artState
    }
    console.log(updatedArticle)
    api.article.patch(updatedArticle)
  }

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
                    {pendingArticle.map((art) => (
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
          {/* <Button variant="primary" block>
            {" "}
            Select Article
          </Button> */}
        </Col>
        <Col xs={8}>
          <div className="SelectedArticle">
            <h2> Selected Article </h2>
            <br />
            <CardDeck>
              <Card bg="Light" style={{ width: "18rem" }}>
                <Card.Header>Title: {article?.art_title}</Card.Header>
                <Card.Body>
                  <Card.Title>Author: {article?.user_author} </Card.Title>
                  <Card.Text>
                    Description:
                    <div className="SelectedArticleDescription">
                    {article?.description}
                    </div>
                    Body:
                    <div className="SelectedArticleBody">
                    {article?.art_body}
                    </div>
                    
                    <br />
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </div>
          <RejectArticle />
          <Row>
            <Col xs={7}>
          
              <Button variant="primary" block value="2" name="status" onClick={approvedOrRejected}>
                Reject Article
              </Button>
              <Button variant="primary" block value="1" name="status" onClick={approvedOrRejected}>
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
