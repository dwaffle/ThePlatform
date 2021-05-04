import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import React from 'react';
import { Rating } from '@material-ui/lab';
// import Rating from "react-rating";
import { ratingListState, useRatingList } from './ratingList';
import './style.scss';
import { Button } from 'react-bootstrap';

//get the artilce rating depending on the article id
export default function RatingArticles(props: { article_id: any }) {
  //get article id
  const articleID = props.article_id;

  //get all my rating
  const rate = useRatingList().ratingList;

  //Filter my ratind depending on article id
  const myRate = rate.filter((_rat) => _rat.article_art_id === articleID);

  //get my reviewrs number
  const nbrReviews = myRate.length;

  // calculate my rating value
  let ratingArticle = calculateRating(
    myRate.map((_rat) => {
      return Number(_rat.rating_value);
    }),
  );

  //get my page history
  const history = useHistory();

  //rating value use state
  const [rating, setRating] = useState(ratingArticle);

  //disactive or active my rating system in the browser depending on the page
  // ( active for writing page and disactive for rating page)
  let readonly = true;

  //the event handler to set the rating
  const onChangeRating = (e: any) => {
    setRating(e.target.value);
  };

  //Function to calculate the rating value
  function calculateRating(rating: number[]) {
    // guard for zero
    if (!rating || rating.length <= 0) {
      return 0;
    }

    // find average rating
    else {
      return Number(
        (
          rating.reduce((total, current) => total + current, 0) / rating.length
        ).toFixed(1),
      );
    }
  }

  //Go to write rating page and submit new rating
  function writeRating() {
    return history.push(`/rating/${articleID}`);
  }

  //Render the page in the the browser
  return (
    <div className="rating border rounded">
      <h2>Customer Ratings</h2>
      <Rating
        name="half-rating"
        defaultValue={rating}
        readOnly={readonly}
        precision={1}
      />{' '}
      <h3 className="starStyle">( {ratingArticle} )</h3>
      <p>
        Averge rating based on ( <strong> {nbrReviews} </strong>){' '}
      </p>
      <Button variant="warning" onClick={writeRating} onChange={onChangeRating}>
        <strong>Add your rating </strong>
      </Button>
    </div>
  );
}
