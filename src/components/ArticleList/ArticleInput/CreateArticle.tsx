import React, { useState } from 'react';
import { Switch } from 'react-router';
import Form from 'react-bootstrap/Form';
import MainLayout from '../../../layouts/MainLayout';
import { useHistory } from 'react-router-dom';
import api from '../../../api';
import './style.scss';
import { options } from './options';
import { useRecoilValue } from 'recoil';
import { ISeries } from '../../../../services/crud-server/src/models/series';
import { seriesListState } from '../articleList';

//An enum is a numbered list, starting at 0.
enum ArticleType {
  FREE = 1,
  PAIDMEMBERS,
  PURCHASED,
}

export function CreateNewArticle() {
  //Does the article have a price?  Set it.
  const [hasPrice, setChecked] = useState<ArticleType>();
  const [price, setPrice] = useState<number>(0);
  const onChange = (e: any) => {
    setPrice(e.target.value);
  };

  const history = useHistory();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [series, setSeries] = useState('');

  const user_id = Number(localStorage.getItem('user_id'));
  const authorName: string = window.localStorage.getItem('username') || '';

  // list of all series
  const seriesList = useRecoilValue<ISeries[]>(seriesListState);
  let userOwnsSeries = seriesList.filter((s) => s.series_owner == user_id);

  function onChangeSeries(e: any) {
    setSeries(e.target.value);
    console.log(e.target.value);
  }

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

  // Submit button functionality and sends it to the database on submit.
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
      let objectToSend = {
        art_price: Number(price),
        artype_id: Number(hasPrice),
        art_title: title,
        description: description,
        user_author: user_id,
        art_body: body,
        art_image: image,
        art_category: category,
        series_id: series,
      };
      console.log(objectToSend);
      //Send object.
      api.article.post(objectToSend);
      alert('Success!');
      history.push('/');
      return;
    }
  }

  //doesn't work
  const [image, setImage] = useState<string>('');
  const fileHandler = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <MainLayout>
      <Switch>
        <Form method="Post">
          Title:
          <Form.Row>
            <Form.Group className="FormRowSpacing">
              <Form.Control
                type="Title"
                placeholder="Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="FormRowSpacing">
              <Form.Control type="Author" readOnly value={authorName} />
            </Form.Group>
          </Form.Row>
          <Form.Row className="FormRowSpacing">
            <input type="file" accept="image/*" onChange={fileHandler} />
          </Form.Row>
          Image Display:
          <div>
            <img className="img-display-box" src={image}></img>
          </div>
          A quick summary of your article:
          <Form.Row className="FormRowSpacing">
            <Form.Control
              as="textarea"
              placeholder="Description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Row>
          The main text of your article:
          <Form.Row className="FormRowSpacing">
            <Form.Control
              as="textarea"
              placeholder="Body"
              rows={15}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Row>
          <Form.Row>
            <Form.Group className="FormRowSpacing">
              <input
                type="radio"
                name="articleType"
                value="1"
                onChange={(e) => setChecked(ArticleType.FREE)}
              />
              <label>All Members </label>
            </Form.Group>

            <Form.Group className="FormRowSpacing">
              <input
                type="radio"
                name="articleType"
                value="3"
                onChange={(e) => setChecked(ArticleType.PAIDMEMBERS)}
              />
              <label> Paid Members Only </label>
            </Form.Group>

            <Form.Group className="FormRowSpacing">
              <input
                type="radio"
                name="articleType"
                value="2"
                onChange={(e) => setChecked(ArticleType.PURCHASED)}
              />
              <label> Priced Article: </label>
            </Form.Group>

            <Form.Group className="FormRowPrice">
              Price
              {showPrice(price)}
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group className="FormRowSpacing">
              <Form.Control
                as="select"
                onChange={changeCategory}
                value={category}
              >
                <option>Categories</option>
                <option value="Tech"> Tech </option>
                <option value="Sports"> Sports </option>
                <option value="Religion"> Religion </option>
                <option value="Health"> Health </option>
                <option value="Sci-Fi"> Sci-Fi </option>
                <option value="Fiction"> Fiction </option>
                <option value="Non-Fiction"> Non-Fiction </option>
                <option value="Science"> Science </option>
                <option value="Beauty"> Beauty </option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="FormRowSpacing">
              <Form.Control as="select" onChange={onChangeSeries}>
                <option>Select Series</option>
                {userOwnsSeries.map((s) => {
                  if (!userOwnsSeries) {
                    return 'You have no Series';
                  }
                  return <option value={s.series_id}>{s.series_title}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Form>
      </Switch>
    </MainLayout>
  );
}
