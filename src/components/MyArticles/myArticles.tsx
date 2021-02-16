import MainLayout from '../../layouts/MainLayout';
import React, { useState, useEffect } from 'react';
import { useArticleList } from '../ArticleList/articleList';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './style.scss';

function MyArticles() {
  // ALL of the articles
  const { articleList, setArticleList } = useArticleList();
  // users ID
  const user_ID = Number(localStorage.getItem('user_id'));
  // show only the users articles
  let myArtList = articleList.filter((a) => a.user_author == user_ID);

  // selected article that comes from pending article
  const [article, setArticle] = useState<IArticle>();

  const ShowArticleOnClick = (e: any) => {
    setArticle(myArtList[e.currentTarget.rowIndex - 1]); //Arrays start at 0.  Row indexes start at 1.
  };

  // No one wants to see 0s and 1s for their articles status
  // let reformedStatus = articleList.filter((status) => status.art_is_approved)
  // console.log("reformed", reformedStatus)
  // function articleStatus (){

  //     switch(articleList.filter((status) => status.art_is_approved) ){
  //         case 0: {
  //             return "Pending";
  //         }
  //         case reformedStatus == 1: {
  //             return "Approved"
  //         }
  //     }
  // }

  return (
    <MainLayout>
      <Row className="pageSize">
        <div className="userArticleList">
          <h5> My Articles: </h5>
          <Row>
            <Col>
              <Table striped bordered hover /*variant="warning"*/>
                <thead className="thead">
                  <tr>
                    <th>Articles</th>
                    <th>Status</th>
                    {/* <th>State</th> */}
                  </tr>
                </thead>
                <tbody>
                  {myArtList.map((art) => (
                    <tr
                      key={art.art_id}
                      onClick={ShowArticleOnClick}
                      defaultValue={art.art_id}
                    >
                      <td>{art.art_title}</td>
                      <td>{art.art_is_approved}</td>
                      {/* <td> State</td> */}
                      {/* <td> <Link to="/articles/:articleId">{art.art_title}</Link></td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>

        

        <Col className="selectedArticle">
            <Form.Group>
                <Form.Label>Article Title</Form.Label>
                <Form.Control type="Title" placeholder={article?.art_title} />
            </Form.Group>

            <Row>
                <Col>
                <Form.Group>
                <Form.Label>Article Type</Form.Label>
                <Form.Control as="select">
                    <option>Free</option>
                    <option>Paid</option>
                    <option>Premium Members </option>
                    </Form.Control>
                </Form.Group>
                </Col>
                
                <Col>
                    <Form.Group>
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="select">
                        <option>Will Change this </option>
                        </Form.Control>
                    </Form.Group>
                
                </Col>
            </Row>

            <Form.Group>
                <Form.Label>Article Description</Form.Label>
                <Form.Control className="description" type="Description" placeholder={article?.description} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Article Body</Form.Label>
                <Form.Control className="body" type="Body" placeholder={article?.art_body} />
            </Form.Group>




        </Col>
      </Row>
    </MainLayout>
  );
}

export default MyArticles;
