import MainLayout from '../../layouts/MainLayout';
import React, { useState, useEffect } from 'react';
import { useArticleList } from '../ArticleList/articleList';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import './style.scss';

enum ArticleType {
  FREE = 1,
  PAIDMEMBERS,
  PURCHASED,
}

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

  const history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const [hasPrice, setChecked] = useState<ArticleType>();
  console.log(hasPrice)
  const [price, setPrice] = useState<number>(0);
  const onChange = (e: any) => {
    setPrice(e.target.value);
  };

  //Activates or deactivates the price text box.

  function showPrice(e: any) {
    if (hasPrice === ArticleType.PURCHASED) {
      return (
        <input
          type="text"
          pattern="[0-9]*"
          name="articleType"
          id="div1"
          value={price}
          onChange={onChange}
        />
      );
    } else {
      return (
        <input
          type="text"
          pattern="[0-9]*"
          name="articleType"
          id="div1"
          value={price}
          onChange={onChange}
          disabled
        />
      );
    }
  }

  function onSubmit(e: any) {
    e.preventDefault();
    //Give error if it's a priced article with no price, or priced with a price less than 0 dollars.
    if (
      (price == undefined && hasPrice === ArticleType.PURCHASED) ||
      (price != undefined && price < 0)
    ) {
      alert('A valid price must be a number greater than 0');
      return;
    } else {
      //If it's free, set the price to zero.
      if (price === undefined || NaN) {
        setPrice(1);
      }

      //Construct object.  Add one to the enum of the artype_id to line it up with the database IDs.  Enums start at 0, our DB starts at 1.
      let articlePatch = {
        art_price: Number(price),
        artype_id: Number(hasPrice),
        art_title: title,
        description: description,
        user_author: Number(localStorage.getItem('user_id')),
        art_body: body,
      };
      //Send object.
      // Will be api.put
      api.article.patch(articlePatch);
      history.push('/myArticles');
      return;
    }
  }

  // No one wants to see 0s and 1s for their articles status
  let reformedStatus = articleList.filter((status) => status.art_is_approved)

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
          <h5> My Articles </h5>
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
            <Form.Control
              type="Title"
              placeholder={article?.art_title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          
          <Form.Row className="radioButtons">
            
            <Form.Group>
              <input
                type="radio"
                name="articleType"
                value="1"
                onChange={(e) => setChecked(ArticleType.FREE)}
              />
              <label>All Members </label>
            </Form.Group>

            <Form.Group>
              <input
                type="radio"
                name="articleType"
                value="3"
                onChange={(e) => setChecked(ArticleType.PAIDMEMBERS)}
              />
              <label> Paid Members Only </label>
            </Form.Group>

            <Form.Group>
              <input
                type="radio"
                name="articleType"
                value="2"
                onChange={(e) => setChecked(ArticleType.PURCHASED)}
              />
              <label> Priced Article: </label>
            </Form.Group>

            <Form.Group className="priceBox">
              Price
              {showPrice(price)}
            </Form.Group>
          </Form.Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option>Will Change this </option>
                  <option> Health </option>
                  <option> Sci-Fi </option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Tags</Form.Label>
                <Form.Control as="select">
                  <option>Will Change this.. </option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Form.Group>
            <Form.Label>Article Description</Form.Label>
            <Form.Control
              as="textarea"
              className="description"
              type="Description"
              value={article?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Article Body</Form.Label>
            <Form.Control
              as="textarea"
              className="body"
              type="Body"
              value={article?.art_body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          I need to finish the backend for Put first
          <p>A user may want to change more than one field. </p>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Col>
        
      </Row>
    </MainLayout>
  );
}

export default MyArticles;
