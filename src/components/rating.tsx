import { useState, useEffect } from "react";
import { useParams } from "react-router";
import React from "react";
// import ReactStars from "react-rating-stars-component";
import Rating from "react-rating";


export default function RatingArticle(props: {}) {

  const [rating, setRating] = useState(0);
  const params = useParams<{ id: any }>();

  // const RatingArticlesList = useRecoilValue<IRating[]>(ratingListState);

  useEffect(() => {
    // setRating(RatingArticlesList.find((rating) => rating === params.id));
  }, [params.id]);

    return (
      <div>
          <h3>title</h3>
          <Rating
            initialRating={rating}
            onClick={(rate) => setRating(rate)}
          />
      </div>
    );
  }
  


