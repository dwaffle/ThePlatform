import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import React from "react";
import { Rating } from "@material-ui/lab";
// import Rating from "react-rating";
import { useRatingList } from "./ratingList";
import "./style.scss";
import { Button } from "react-bootstrap";
import { IRating } from "../../../services/crud-server/src/models/rating";



export default function RatingArticles(props: { article_id?: number|undefined }) {

  const params = useParams<{ id: string }>();
  console.log(params)
  // const rate = useRecoilValue<IRating[]>(ratingListState);

    const rate = [ {
      rating_id: 1,
      rating_title: 'rating1',
      rating_value: 5,
      rating_review: 'rating1',
      rating_date: '0000-00-00 00:00:00',
      user_user_id: 5,
      article_art_id: 57 } ,
      {
        rating_id: 1,
        rating_title: 'rating2',
        rating_value: 3,
        rating_review: 'rating2',
        rating_date: '0000-00-00 00:00:00',
        user_user_id: 2,
        article_art_id: 57 },
        {
          rating_id: 1,
          rating_title: 'rating3',
          rating_value: 2,
          rating_review: 'rating3',
          rating_date: '0000-00-00 00:00:00',
          user_user_id: 4,
          article_art_id: 57 },
          {
            rating_id: 1,
            rating_title: 'rating4',
            rating_value: 2,
            rating_review: 'rating4',
            rating_date: '0000-00-00 00:00:00',
            user_user_id: 4,
            article_art_id: 54 }];
          
    // const rate = useRatingList().ratingList;
    const nbrReviews = rate.length;

    
     const myRate = rate.find((_rat) => _rat.article_art_id === 57);
   

    // let  ratingArticle = calculateRating( 
    //   myRate.map((_rat)=> {
    //     return Number(_rat.rating_value)
    //   })
    // )

    let ratingArticle = calculateRating( 
      rate.map((_rat)=> {
        return Number(_rat.rating_value)
      })
    )
   
 
    const history = useHistory();
    const user_id = window.localStorage.getItem("user_id")
    const [rating, setRating] = useState(ratingArticle);
    let readonly = true;

    const onChangeRating = (e: any) => {
      setRating(e.target.value);
    };

    
    
  function calculateRating(rating: number[] = []) {

    
    // guard for zero
    if (rating.length === 0) {
      return 0;
    }

    // find average rating
    else {
      return (Number(
        (
          rating.reduce((total, current) => total + current, 0) /
          rating.length
        ).toFixed(1)
      ))
    }
  }

    function writeRating(){

        // let userType = Number(localStorage.getItem("user_type"));
        // if (userType !=1) {
        //   readonly = true;
        // } else {
        //   return history.push(`/rating/:id` );
        // }
        
        return history.push(`/rating`);
      };  
      

    
    // useEffect(() => {
    //     // setRating(RatingArticlesList.find((rating) => rating === params.id));
    // }, []);

    return (
      <div className ="rating "> 
          <h2>Customer Ratings</h2>
         
          <h1>{ ratingArticle } <Rating name="half-rating" defaultValue ={ratingArticle}  readOnly = {readonly}
            precision={1}/> </h1> 
          <p>Averge rating based on ( <strong> { nbrReviews} </strong>)</p>
          
          { console.log("...", rate) }
              <Button
              variant="warning"
              onClick={ writeRating }
              onChange={onChangeRating}
              // hidden = {hiddenBtn}
             
              >
              <strong>See More</strong>
            
          </Button>
          
      
 


            

      </div>
    );
  }
  
