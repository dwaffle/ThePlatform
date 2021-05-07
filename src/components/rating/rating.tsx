import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
// import React from 'react';
import { Rating } from '@material-ui/lab';
// import Rating from "react-rating";
import { useRatingList } from './ratingList';
import './style.scss';
import { Button } from 'react-bootstrap';


//get the artilce rating depending on the article id
export default function RatingArticles(props: { article_id: any }) {
  //get article id
  const articleID = props.article_id;

  //get all my rating
  const rate = useRatingList().ratingList;

  //get my page history
  const history = useHistory();

  //rating value use state
  const [rating, setRating] = useState<number | undefined>(0);

  //get my reviewrs number
  const [nbrReviews, setNbrReviews] = useState(0)


  //disactive or active my rating system in the browser depending on the page
  // ( active for writing page and disactive for rating page)
  let readonly = true;

  //Function to calculate the rating value
  function calculateRating(rating: number[]) {
    // guard for zero
    if (rating && rating.length >= 0) {
      return Number(
        (
          rating.reduce((total, current) => total + current, 0) / rating.length
        ).toFixed(1),
      );
    }

    // find average rating
    else {
      return 0
    }
  }

  //Go to write rating page and submit new rating
  function writeRating() {
    return history.push(`/rating/${articleID}`);
  }

  useEffect(() => {

     //Filter my ratind depending on article id
    const myRate = rate.filter((_rat) => _rat.article_art_id === articleID);

    //get nbr of reviews
    const nbrReviews = myRate.length;

     // calculate my rating value
    let ratingArticle = calculateRating(
    myRate.map((_rat) => {
      return Number(_rat.rating_value);
    }),
  );

  setNbrReviews(nbrReviews)
  setRating(ratingArticle)
    
  }, [rating]);

  //Render the page in the the browser
  return (

    <div className="rating">
 
      <Rating
        name="half-rating"
        value={rating}
        readOnly={readonly}
        precision={1}
        max ={5}
      /> 
      
      <br/>
      <h6 className="starStyle"> Base on ( <strong> {nbrReviews} </strong>) reviewer(s)</h6>
      <Button variant="warning" onClick={writeRating}>
        <strong>Add Rating</strong>
      </Button>
    </div>
  );
  
}

     