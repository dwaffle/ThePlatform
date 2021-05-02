import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import React from 'react';
import { Rating } from '@material-ui/lab';
// import Rating from "react-rating";
import { ratingListState, useRatingList } from './ratingList';
import './style.scss';
import { Button } from 'react-bootstrap';


export default function RatingArticles(props: { article_id: any }) {
  const articleID = props.article_id;

  const rate = useRatingList().ratingList;

  const myRate = rate.filter((_rat) => _rat.article_art_id === articleID);

  const nbrReviews = myRate.length;

  let ratingArticle = calculateRating(
    myRate.map((_rat) => {
      return Number(_rat.rating_value);
    }),
  );

  const history = useHistory();
  const [rating, setRating] = useState(ratingArticle);
  let readonly = true;

  const onChangeRating = (e: any) => {
    setRating(e.target.value);
  };

  function calculateRating(rating: number[]) {
    // guard for zero 
    if (rating.length === 0) {
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

  function writeRating() {
    return history.push(`/rating/${articleID}`);
  }

  return (
    <div className="rating border rounded">
      <h2>Customer Ratings</h2>

      <Rating
          name="half-rating"
          defaultValue={rating}
          readOnly={readonly}
          precision={1}
        />{' '}
      <h3 className="starStyle">
        ( {ratingArticle}{' '} )
        
      </h3>
      <p>
        Averge rating based on ( <strong> {nbrReviews} </strong>)
      </p>

      {/* {console.log('...', rate)} */}
      <Button variant="warning" onClick={writeRating} onChange={onChangeRating}>
        <strong>Add your rating </strong>
      </Button>
    </div>
  );
}
