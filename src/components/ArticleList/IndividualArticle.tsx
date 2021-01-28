import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import MainLayout from "../../layouts/MainLayout";
import { IArticle } from "../../../services/crud-server/src/models/article";
import Rating from "react-rating";
import "./style.scss";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { articleListState } from "./articleList";
import google from "../../data/icon/google.png";
import facebook from "../../data/icon/facebook.png";
import instagram from "../../data/icon/instagram.png";
import twitter from "../../data/icon/twitter.png";
import { Link } from "react-router-dom";

const IndividualArticle = () => {
  const [rating1, setRating1] = useState(0);
  const params = useParams<{ id: string }>();
  const art = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();

  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  function getRating() {
    // code that will display rating and allow users to rate the article
  }

  function priceCheck (price:any){
    if(price <= 0){
      return "Free Article"
    } else return "$" + price
  }

   //popup state
  const [isOpen, setisOpen] = useState<boolean>(false);

  // button functionality to set the state of the popup
  // allow free users to only view % of the article until purchased 
  const togglePopup = (price:any) => {
     setisOpen(!isOpen); 
  };

  //Content of this popup is held in the mainlayout
  const PurchasePopup = (props: any) => {
    function oneClickPurchase() {
      // needs a user to have their payment info filled in
    }
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          {props.content}
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <section>
        <h1> {article?.art_title}</h1>
        <h4>
          Author: {article?.user_firstName} {article?.user_lastName}
        </h4>

        <div className="Rating">
          <Rating
            initialRating={rating1}
            onClick={(rate) => setRating1(rate)}
          />
          <div>
          <input
            type="button"
            value={priceCheck(article?.art_price)}
            onClick={togglePopup}
          />
          {isOpen && <PurchasePopup
            content={<>
          <b>Design your Popup</b>
          <button>Test button</button>
          </>}
        handleClose={togglePopup}
        />}
          </div>
        </div>

        <div>
          <img
            className="artImage"
            src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"
          ></img>
        </div>

    

        <div>
          {" "}
          Description:
          <div className="description">{article?.description}</div>
        </div>

        <div className="body">{article?.art_body}</div>

        <Row>
          <Col className="Col">1 Viewer</Col>
          <Col className="Col"> No Series </Col>
          <Col className="Col"> Godzilla, NYC, Destruction </Col>
        </Row>

        <Row className="socialMedia">
          <a href="http://www.facebook.com/" target="_blank">
            <img src={facebook}></img>
          </a>
          <a href="http://www.twitter.com/" target="_blank">
            <img src={twitter}></img>
          </a>
          <a href="http://www.instagram.com/" target="_blank">
            <img src={instagram}></img>
          </a>
        </Row>
      </section>
    </MainLayout>
  );
};

export default IndividualArticle;
