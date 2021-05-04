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

  // selected article that comes from pending article
  const [article, setArticle] = useState<IArticle>();

  const ShowArticleOnClick = (id: number) => {
    // setArticle(myArtList[e.currentTarget.rowIndex - 1]); //Arrays start at 0.  Row indexes start at 1.
    setArticle(myArtList.find((article) => article.art_id === id)); //Arrays start at 0.  Row indexes start at 1.

    history.push('/myArticles');
  };

  console.log("article", article)

  const history = useHistory();
  const setTitle = (value: string) => {
    setArticle({
      ...(article as IArticle),
      art_title: value,
    });
  };

  const setDescription = (value: string) => {
    setArticle({
      ...(article as IArticle),
      description: value,
    });
  };

  const setImage = (value:string) => {
    setArticle({
      ...(article as IArticle),
      art_image: value,
    })
  };

  const setBody = (value: string) => {
    setArticle({
      ...(article as IArticle),
      art_body: value,
    });
  };

  const setSeries = (value: number) => {
    setArticle({
      ...(article as IArticle),
      series_id: value,
    });
  };

  const setCategory = (value: string) => {
    setArticle({
      ...(article as IArticle),
      art_category: value,
    });
  };
  // const [title, setTitle] = useState<string>('');
  // const [category, setCategory] = useState();
  // const [series, setSeries] = useState();
  // const [description, setDescription] = useState<string>('');
  // const [body, setBody] = useState<string>('');

  const [hasPrice, setChecked] = useState<ArticleType>();

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
        art_id: article?.art_id,
        artype_id: article?.artype_id,
        art_title: article?.art_title,
        description: article?.description,
        art_body: article?.art_body,
        art_category: article?.art_category,
        series_id: article?.series_id,
      };
      // console.log(articlePatch);
      //Send object.
      alert('Success');
      api.article.put(articlePatch);
      return history.push('/myArticles');
    }
  }

  let userOwnsSeries = seriesList.filter((s) => s.series_owner == user_ID);
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

  let newSeries = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem('user_type'));
    if (userType != 4 || !userType) {
      alert('You must be an author to create a new Series');
    } else {
      return history.push('/seriesCreation');
    }
  };

  // function newSeries() {
  //   return history.push('/seriesCreation');
  // }

  return (
    <MainLayout>
      <Row className="pageSize">
        <div className="userArticleList">
          {/* <h5> My Articles </h5> */}
          <Row>
            <Col>
              Have too many articles? Click
              <button className="seriesCreate" onClick={newSeries}>
                here
              </button>
              to form a new Series!
              <Table
                className="tableParent"
                striped
                bordered
                hover
                variant="light"
              >
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
                      onClick={() => ShowArticleOnClick(art.art_id)}
                      defaultValue={art.art_id}
                    >
                      <td>{art.art_title}</td>
                      <td>{seriesStatus(art.art_is_approved)}</td>
                      <td> {seriesNull(art.series_title)}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>

        <Col className="selectedArticle">
          <Form.Group>
            <Form.Label className="FormLabels">Article Title</Form.Label>
            <Form.Control
              type="text"
              value={article?.art_title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="FormLabels">Category</Form.Label>
                <Form.Control
                  value={article?.art_category}
                  as="select"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="null"> Select Category.. </option>
                  <option value="Tech"> Tech </option>
                  <option value="Health"> Health </option>
                  <option value="Beauty"> Beauty </option>
                  <option value="Science"> Science </option>
                  <option value="Reality"> Reality </option>
                  <option value="Fiction"> Fiction </option>
                  <option value="NonFiction"> Non-Fiction </option>
                  <option value="Conspiracy"> Conspiracy </option>
                  <option value="Nature"> Nature</option>
                  <option value="Animals"> Animals </option>
                  <option value="Humour"> Humour </option>
                  <option value="Religion"> Religion </option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="FormLabels">Series</Form.Label>
                <Form.Control
                  value={article?.series_id}
                  as="select"
                  onChange={onChangeSeries}
                >
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
              <Form.Label className="FormLabels">Article Type</Form.Label>
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

          <Form.Row className="FormRowSpacing">
            <label>Enter a Custom Photo - https://URL</label>

            <input
              type="url"
              name="url"
              id="url"
              placeholder="https://honokeana.net/wp-content/uploads/2014/10/sunset-wide-Daane_Honokeana-10-431x1600-1024x276.jpg"
              pattern="https://.*"
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Row>
          Image Display:
          <p className="noMargin">
            <small>The default image will be used otherwise</small>
          </p>
          <div>
            <img src={article?.art_image}></img>
          </div>
          <Form.Group>
            <Form.Label className="FormLabels">Article Description</Form.Label>
            <Form.Control
              as="textarea"
              className="description"
              type="Description"
              value={article?.description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
        
          <Form.Group>
            <Form.Label className="FormLabels">Article Body</Form.Label>
            <Form.Control
              as="textarea"
              className="body"
              type="Body"
              value={article?.art_body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Group>

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
