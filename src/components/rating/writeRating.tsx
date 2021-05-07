import React, { useState } from 'react';
import { Button, Card, CardDeck, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import MainLayout from '../../layouts/MainLayout';
// import Rating from "react-rating"
import { Rating } from '@material-ui/lab';
import './style.scss';
import api from '../../api';
import { useRecoilValue } from 'recoil';
import { IRating } from '../../../services/crud-server/src/models/rating';
import { ratingListState } from './ratingList';

//Write and submit new rating
export default function WriteRating(props: {}) {
  //get all rating and review from the data base
  const rate = useRecoilValue<IRating[]>(ratingListState);

  const [title, setTitle] = useState<string>('no Title');
  const [review, setReview] = useState<string>('no Review');
  const [ratingValue, setValueRating] = useState(0);

  //get the user Id from the browser
  const user_id = Number(window.localStorage.getItem('user_id'));

  //get page history
  const history = useHistory();

  //Id article from the browser
  const { id } = useParams<{ id: string }>();

  //get only the article rating depending on the article id
  const myRate = rate.filter((_rat) => _rat.article_art_id === Number(id));

  // New rating information
  let objectToSend = {
    rating_title: title,
    user_user_id: user_id,
    rating_review: review,
    rating_value: ratingValue,
    article_art_id: id,
  };

  //change handler event to set the rating title
  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  //change handler event to set the rating review
  const onChangeReview = (e: any) => {
    setReview(e.target.value);
  };

  //change handler event to set the rating value
  const onChangeRating = (e: any) => {
    setValueRating(e.target.value);
  };

  //submit new rating or throw error
  function submitRating(e: any) {
    // To be sure there is rating to create new one in the data base
    // Send API request and waiting for return or throw error
    if (objectToSend && objectToSend.rating_value >= 1) {
      e.preventDefault();
      api.rating
        .post(objectToSend)
        .then(() => {
          console.log('Thank you for your review ');
        })
        .catch((error) => console.error(`Error: ${error}`));

      console.log(objectToSend);
      alert('Thank you for your review ');
      history.goBack();
    }
  }

  function isRating() {
    if (user_id) {
      return (
        <>
          <h3>Your Ratings </h3>
          <Rating onChange={onChangeRating} /> <br />
          <Form method="Post">
            <Form.Row>
              <Form.Group className="FormRowSpacing">
                <Form.Control
                  // type="title"
                  placeholder="Rating Title"
                  onChange={onChangeTitle}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group className="FormRowSpacing">
                <Form.Control
                  as="textarea"
                  placeholder="Rating review"
                  rows={3}
                  onChange={onChangeReview}
                />
              </Form.Group>
            </Form.Row>

            <Button variant="warning" onClick={submitRating}>
              <strong>submit</strong>
            </Button>
          </Form>
        </>
      );
    } else {
      return (
        <>
          <br />
          <h3> login to rate the article </h3>
          <div>
            Please <a href="/login">log in</a> or <a href="/signup">sign up</a>{' '}
            so you can rate any article
          </div>
        </>
      );
    }
  }

  // Render the page on the browser
  return (
    <MainLayout>
      <div className="writeRating w-50 mx-auto">
        {isRating()}

        <hr />

        {myRate.map((_rat) => {
          return (
            <div>
              <CardDeck className="Card">
                <Card.Body>
                  <Card>
                    <Card.Header>{_rat.rating_title}</Card.Header>
                    <Card.Body>
                      <Rating readOnly={true} value={_rat.rating_value} />{' '}
                      <br />
                      {/* <Card.Title>{_rat.user_user_id}</Card.Title> */}
                      <Card.Text>{_rat.rating_review}</Card.Text>
                    </Card.Body>
                  </Card>
                </Card.Body>
              </CardDeck>
            </div>
          );
        })}
      </div>
    </MainLayout>
  );
}
