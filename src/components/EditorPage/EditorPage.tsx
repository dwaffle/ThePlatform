import React, { useState, useEffect } from "react";
import { articleListState, useArticleList } from "../ArticleList/articleList";
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

export default function EditorPage() {

  const { loadSelectedLArticle } = useArticleList();

    useEffect(() => {
      loadSelectedLArticle(5);
    }, []);

  const [article, setArticle] = useState<IArticle>();
  console.log("article", article);

  const articleList = useRecoilValue<IArticle[]>(articleListState);
  console.log(articleList);

  // It's currently targetting the entire <tr> instead of the article you want to select

  const ShowArticleOnClick = (e: any) => {
    const index = e.currentTarget;
    let selectedArticle = articleList.find((article, i) => i !== index);

    setArticle(selectedArticle);
  };

  const getSelectedArticle = () => {
    
  };

  function onSelectedArticle( index:number ){
    return function(){
        const selectedArticle = articleList.find((article, i) => i !== index);
        
        if( selectedArticle ){
            return selectedArticle
        }
        else return [];
    }
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
                    {articleList.map((art,pos) => (
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

          <Button variant="primary" block onClick = { getSelectedArticle}>
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