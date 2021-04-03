import React, { useState } from "react";
import { Button, Card, CardDeck, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import MainLayout from "../../layouts/MainLayout";
// import Rating from "react-rating"
import { Rating } from "@material-ui/lab";
import "./style.scss";
import api from "../../api";
import { useRecoilValue } from "recoil";
import { IRating } from "../../../services/crud-server/src/models/rating";
import { ratingListState } from "./ratingList";


// const rate = 3;

 

const user_id = Number(window.localStorage.getItem("user_id"))


 


// const rate = [ {
//   rating_id: 1,
//   rating_title: 'test',
//   rating_value: 5,
//   rating_review: 'kkkkkkk',
//   rating_date: '0000-00-00 00:00:00',
//   user_user_id: 4,
//   article_art_id: 57 } ,
//   {
//     rating_id: 6,
//     rating_title: 'test',
//     rating_value: 3,
//     rating_review: 'vvvvv',
//     rating_date: '0000-00-00 00:00:00',
//     user_user_id: 4,
//     article_art_id: 57 },
//     {
//       rating_id: 8,
//       rating_title: 'test',
//       rating_value: 2,
//       rating_review: 'dddd',
//       rating_date: '0000-00-00 00:00:00',
//       user_user_id: 4,
//       article_art_id: 57 }];



export default function WriteRating(props: {}) {

  
  const history = useHistory();

  const rate = useRecoilValue<IRating[]>(ratingListState);
  // const [rating, setRating] = useState(rate);
  const [title, setTitle] = useState<string>("no Title");
  const [review, setReview] = useState<string>("no Review");
  const [ratingValue, setValueRating] = useState(0);


  let objectToSend = {

    
    rating_title: title,
    rating_user_id: user_id,
    rating_review: review,
    rating_value: ratingValue,
    rating_article_id: 1
  }

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const onChangeReview = (e: any) => {
    setReview(e.target.value);
  };

  const onChangeRating = (e: any) => {
    setValueRating(e.target.value);
  };

  function submitRating(e:any){
    e.preventDefault();
    api.rating
    .post(objectToSend )
    .then(() => {
      alert("Thank you for your review ");
    })
    .catch((error) => console.error(`Error: ${error}`));

    console.log(objectToSend)
    // alert("Thank you for your review ");
    history.goBack();
  }
 
  
  

    return (
      <MainLayout>
        <div className ="writeRating w-50 mx-auto">
          <h3>Your Ratings</h3>
          
          <Rating onChange ={ onChangeRating }/> <br/>

         
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

            <Button
                variant="warning"
                onClick={submitRating}
                >
                <strong>submit</strong>
            </Button>
        </Form>
      <hr/>
       
      
      {  rate.map((_rat)=> {
        return (
          <div  >
           <CardDeck className ="Card">
           <Card.Body>
            <Card>
              <Card.Header>{_rat.rating_title}</Card.Header>
              <Card.Body>
                  <Rating readOnly={true} value={ _rat.rating_value}/> <br/>
                <Card.Title>{ _rat.rating_user_id}</Card.Title>
                <Card.Text>
                { _rat.rating_review}
                </Card.Text>
              </Card.Body>
            </Card>
            </Card.Body>
            </CardDeck>
          </div>
        )
      })}
      

     
        </div>

      

      </MainLayout>
      );
}
