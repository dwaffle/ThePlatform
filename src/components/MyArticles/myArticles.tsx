import MainLayout from '../../layouts/MainLayout';
import React, { useState, useEffect } from 'react';
import { seriesListState, useArticleList } from '../ArticleList/articleList';
import { IArticle } from '../../../services/crud-server/src/models/article';
import { Row, Col, Table, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useHistory } from 'react-router-dom';
import api from '../../api';
import './style.scss';
import { constSelector, useRecoilValue } from 'recoil';
import { ISeries } from '../../../services/crud-server/src/models/series';

enum ArticleType {
  FREE = 1,
  PAIDMEMBERS,
  PURCHASED,
}

function MyArticles() {
  // ALL of the articles
  const { articleList, setArticleList } = useArticleList();
  // list of all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  // users ID
  const user_ID = Number(localStorage.getItem('user_id'));
  // show only the users articles
  let myArtList = articleList.filter((a) => a.user_author == user_ID);
  //user ID
  const user_id = Number(localStorage.getItem('user_id'));

  // selected article that comes from pending article
  const [article, setArticle] = useState<IArticle>();

  const ShowArticleOnClick = (e: any) => {
    setArticle(myArtList[e.currentTarget.rowIndex - 1]); //Arrays start at 0.  Row indexes start at 1.
  };

  const history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState();
  const [series, setSeries] = useState();
  const [description, setDescription] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const [hasPrice, setChecked] = useState<ArticleType>();

  const [price, setPrice] = useState<number>(0);
  const onChange = (e: any) => {
    setPrice(e.target.value);
  };
  const changeCategory = (e: any) => {
    setCategory(e.target.value);
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
        art_title: article?.art_title,
        description: article?.description,
        user_author: article?.user_author,
        art_body: article?.art_body,
        series_id: article?.series_id,
      };
      //Send object.
      api.article.patch(articlePatch);
      history.push('/myArticles');
      return;
    }
  }

  let userOwnsSeries = seriesList.filter((s) => s.series_owner == user_id);
  function onChangeSeries(e: any) {
    setSeries(e.target.value);
    console.log(e.target.value);
  }

  const seriesNull = (seriesID: any) => {
    if (!seriesID) {
      return 'None';
    }

    return seriesID;
  };

  const seriesStatus = (seriesID: any) => {
    if (seriesID == 1) {
      return 'Approved';
    }

    return 'Pending';
  };

  function newSeries() {
    return history.push('/seriesCreation');
  }

  return (
    <MainLayout>
      <Row className="pageSize">
        <div className="userArticleList">
          {/* <h5> My Articles </h5> */}
          <Row>
            <Col>
              <Table striped bordered hover /*variant="warning"*/>
                <thead className="thead">
                  <tr>
                    <th>Articles</th>
                    <th>Status</th>
                    <th>Series </th>
                    {/* <th>State</th> */}
                  </tr>
                </thead>
                <tbody>
                  {myArtList.map((art, index) => (
                    <tr
                      key={index}
                      onClick={ShowArticleOnClick}
                      defaultValue={art.art_id}
                    >
                      <td>{art.art_title}</td>
                      <td>{seriesStatus(art.art_is_approved)}</td>
                      <td> {seriesNull(art.series_id)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          Have too many articles? Click
          <button className="seriesCreate" onClick={newSeries}>
            here
          </button>
          to form a new Series!
        </div>

        <Col className="selectedArticle">
          <Form.Group>
            <Form.Label className="FormLabels">Article Title</Form.Label>
            <Form.Control
              type="Title"
              defaultValue={article?.art_title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="FormLabels">Category</Form.Label>
                <Form.Control as="select" onChange={changeCategory}>
                  <option value="Tech"> Tech </option>
                  <option value="Health"> Health </option>
                  <option value="Sci-Fi"> Sci-Fi </option>
                  <option value="Science"> Science </option>
                  <option value="Beauty"> Beauty </option>
                  <option value="Beauty"> Humour </option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="FormLabels">Series</Form.Label>
                <Form.Control as="select" onChange={onChangeSeries}>
                  <option value="null">Select Series..</option>
                  {userOwnsSeries.map((s) => {
                    return (
                      <option value={s.series_id}>{s.series_title}</option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Col>

            <Col>
              <Form.Label className="FormLabels">Article Type </Form.Label>
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
                <label> Priced Article: $ </label>
                {showPrice(price)}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label className="FormLabels">Article Description</Form.Label>
            <Form.Control
              as="textarea"
              className="description"
              type="Description"
              defaultValue={article?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label className="FormLabels">Article Body</Form.Label>
            <Form.Control
              as="textarea"
              className="body"
              type="Body"
              defaultValue={article?.art_body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>
          I need to finish the backend for Put or Patch first
          <p></p>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default MyArticles;
