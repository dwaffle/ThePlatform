import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import React from "react";
import Rating from "react-rating";
import { useRatingList } from "./ratingList";
import "./style.scss";
import { Button } from "react-bootstrap";


export default function RatingArticles(props: {}) {


//   const rate = useRecoilValue<IRating[]>(ratingListState);
    const rate = useRatingList().ratingList;
    const nbrReviews = useRatingList().nbrReviews;
    const ratingArticle = useRatingList().ratingArticle
    const history = useHistory();
    const user_id = window.localStorage.getItem("user_id")
    const [rating, setRating] = useState(ratingArticle);
    let readonly = true;



    function goRating(){

        let userType = Number(localStorage.getItem("user_type"));
        if (userType !=1) {
          readonly = true;
        } else {
          return history.push(`/writeRating` );
        }
      };  
      

    
    // useEffect(() => {
    //     // setRating(RatingArticlesList.find((rating) => rating === params.id));
    // }, []);

    return (
      <div className ="rating">
          <h3>Customer Reviews</h3>
          <h4>Ratings</h4>
          <h1>{ ratingArticle } <Rating initialRating={rating}  readonly = {readonly}/> </h1> 
          <p>Averge rating based on ( <strong> { nbrReviews} </strong>)</p>
          
           
              <Button
              variant="warning"
              onClick={goRating}
              // hidden = {hiddenBtn}
             
              >
              <strong>Your Rating</strong>
          </Button>
 


            

      </div>
    );
  }
  
