import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import React from "react";
import Rating from "react-rating";

import { useRecoilValue } from 'recoil';
import { ratingListState } from "./ratingList";
import { IRating } from "../../../services/crud-server/src/models/rating";

export default function RatingArticles(props: {}) {


  const rate = useRecoilValue<IRating[]>(ratingListState);
  
  const history = useHistory();
  const user_id = window.localStorage.getItem("user_id")
  const [rating, setRating] = useState(0);
 
  useEffect(() => {
    // setRating(RatingArticlesList.find((rating) => rating === params.id));
  }, []);

    return (
      <div>
          <h3>title</h3>
          <Rating
            initialRating={rating}
          />
          <p> { rating }</p>
          <p> { user_id }</p>
          -- {console.log("history",history)}
            {console.log("slug",rate) }

      </div>
    );
  }
  
