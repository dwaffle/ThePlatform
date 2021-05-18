import { useState } from 'react';
import { articleListState } from '../ArticleList/articleList';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { useRecoilValue } from 'recoil';
import { useHistory } from 'react-router-dom';
import { Row, Col, Table, Button, CardDeck, Card } from 'react-bootstrap';
import MainLayout from '../../layouts/MainLayout';
import RejectArticle from './RejectArticle';
import api from '../../api';

export default function EditorPage() {
  const history = useHistory();
  // all articles
  const articleList = useRecoilValue<IArticle[]>(articleListState);
  // selected article that comes from pending article
  const [article, setArticle] = useState<IArticle>();
  // value of approved or rejected of a selected article
  const [artState, setArtState] = useState();
  //filter only articles that are not evaluated
  let pendingArticle = articleList.filter((a) => a.art_is_approved == 0);

  // function to select and set an article from the pending list
  const ShowArticleOnClick = (e: any) => {
    setArticle(pendingArticle[e.currentTarget.rowIndex - 1]); //Arrays start at 0.  Row indexes start at 1.
  };

  // backend is currently set as 0 is unpublished AND rejected,
  // 1 is approved.
  // currently have to hit twice?
  let approvedOrRejected = (e: any) => {
    setArtState(e.target.value);
    patchArticle();
  };

  //api patch request
  function patchArticle() {
    let updatedArticle = {
      art_is_approved: Number(artState),
      art_id: article?.art_id,
    };

    console.log(updatedArticle.art_is_approved);

    console.log('patch', updatedArticle);
    api.article.patch(updatedArticle);
    history.push('/editor');
    return;
  }

  return (
    <MainLayout>
      <div className="styleEditor">
        <p className="h8tch2">Editor page</p>
      </div>
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
                        <td>{art.user_userName}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs={8}>
          <div className="SelectedArticle">
            <h2> Selected Article </h2>
            <br />
            <CardDeck>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header>Title: {article?.art_title}</Card.Header>
                <Card.Body>
                  <Card.Title>Author: {article?.user_userName} </Card.Title>
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
              <Button
                variant="primary"
                block
                value="2"
                name="status"
                onClick={approvedOrRejected}
              >
                Reject Article
              </Button>
              <Button
                variant="primary"
                block
                value="1"
                name="status"
                onClick={approvedOrRejected}
              >
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
