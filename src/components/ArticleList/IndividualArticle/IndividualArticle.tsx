import React, { useState, useEffect } from "react";
import "./style.scss";
import { useRecoilValue } from "recoil";
import MainLayout from '../../../layouts/MainLayout'
import { IArticle } from "../../../../services/crud-server/src/models/article";
import api from "../../../api";
import Rating from "react-rating";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import { articleListState } from "../articleList";
import facebook from "../../../data/icon/facebook.png";
import instagram from "../../../data/icon/instagram.png";
import twitter from "../../..//data/icon/twitter.png";
import paymentInfo from "../../../api/paymentInfo/paymentInfo";
// import { Link } from "react-router-dom";

const IndividualArticle = () => {
  const [rating1, setRating1] = useState(0);
  const params = useParams<{ id: string }>();
  const art = useRecoilValue<IArticle[]>(articleListState);
  const [article, setArticle] = useState<IArticle>();

  // Check for users payment info
  const [userPInfo, setUserPInfo] = useState();
  console.log("Payment Info", userPInfo)

  //rendering for articls and assigning an id to a article
  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  useEffect(() => {
    const paymentInfo = { user_id: Number(localStorage.getItem("user_id"))}  
    api.paymentInfo
      .post(paymentInfo)
      .then((response) => {
        setUserPInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  function getRating() {
    // code that will display rating and allow users to rate the article
  }

  function priceCheck(price: any) {
    if (price = 0) {
      setisOpen(!isOpen)
    } else setisOpen(isOpen)
  }
  

  
  //popup state
  const [isOpen, setisOpen] = useState<boolean>(false);

  // button functionality to set the state of the popup
  // allow free users to only view % of the article until purchased
  const togglePopup = (price: any) => {
    setisOpen(!isOpen);
  };

  //Content of this popup is held in the mainlayout
  const PurchasePopup = (props: any) => { 
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
  
  function oneClickPurchase() {
    if (!userPInfo){
      alert("You don't have any payment information")
    } else {
      alert("Test")
    }
  }

  return (
    <MainLayout>

      <div className="divD">
        {article?.user_firstName}{" "}{article?.user_lastName}
        <p></p>
      </div>

      <section>
        <h1>{article?.art_title} </h1>
        <Row noGutters>
          <Col md="auto" >
            <img
              src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"
            ></img>
          </Col>
          <Col className="description" >
            {article?.description}
          </Col>
        </Row>

        <div>
          {article?.art_body}
        </div>

        <input
                  type="button"
                  value="test"
                  onClick={togglePopup}
                />
                {isOpen && <PurchasePopup
                  content={<>
                    <p>
                      This Article is not free, If you wish to view it, press "Buy Article"
                    </p>
                    <button onClick={oneClickPurchase}> Test </button>
                    <p>soon.. The page won't scroll when this div is open</p>
                  </>}
                  handleClose={togglePopup}
                />}

      </section>
      
    </MainLayout>
  );
};

{/* <togglePopup 
condition={article.price} */}
export default IndividualArticle;
