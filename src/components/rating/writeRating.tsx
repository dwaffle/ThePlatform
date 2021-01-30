import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import MainLayout from "../../layouts/MainLayout";
import Rating from "react-rating"


//   const rate = useRecoilValue<IRating[]>(ratingListState);
const rate = 3;
// const [rating, setRating] = useState(rate);

const user_id = window.localStorage.getItem("user_id")




export default function WriteRating(props: {}) {

  function submitRating(){

    alert("Thank you for your review ");
    // localStorage.clear();
    history.push("/rating");
  
  }
 
  const [rating, setRating] = useState(rate);
  const history = useHistory();
  

    return (
      <MainLayout>
        <div className ="writeRating">
          <h3>Your Reviews and Ratings</h3>
          <Rating /> <br/>

            <Button
                variant="warning"
                onClick={submitRating}
                >
                <strong>submit</strong>
            </Button>

        </div>
      </MainLayout>
      );
}
