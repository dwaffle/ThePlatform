import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import MainLayout from '../../../layouts/MainLayout';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../../api';
import { useParams } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import { articleListState } from '../articleList';
import facebook from '../../../data/icon/facebook.png';
import instagram from '../../../data/icon/instagram.png';
import twitter from '../../..//data/icon/twitter.png';
import paymentInfo from '../../../api/paymentInfo/paymentInfo';

const IndividualArticle = () => {
  //articles without id
  const art = useRecoilValue<IArticle[]>(articleListState);
  //articles with ids
  const [article, setArticle] = useState<IArticle>();
  // assigns an id to one article
  const params = useParams<{ id: string }>();
  // user id...
  const user_id = Number(localStorage.getItem('user_id'));
  //does the user own the article if required?
  const [isOwned, setIsOwned] = useState();
  console.log('isOwned', isOwned);

  //rendering for articles and assigning an id to an article
  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  // if the article is a paid article, check to see if the user owns it
  // if not, enforce pop up where they can purchase the article
  useEffect(() => {
    if (article?.artype_id == 2) {
      // with or without object?
      const userID = {user_id: Number(localStorage.getItem("user_id"))}  
      api.purchaseArticle
        .get(userID)
        .then((response) => {
          setIsOwned(response.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }
    if (!isOwned) {
      togglePopup();
    }
  }, []);

  //popup state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // state if the user has payment information or not.
  const [userPInfo, setUserPInfo] = useState();
  console.log('UserPInfo', userPInfo);
  // button functionality to set the state of the popup
  // makes api request to check payment information
  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
    if (isOpen) {
      document.body.style.overflow = 'unset';
    }
    api.paymentInfo
      .post(user_id)
      .then((response) => {
        setUserPInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // Function enabling a user to purchase an article
  function oneClickPurchase() {
    if (!userPInfo) {
      alert("You don't have any payment information");
    } else {
      let objectToSend = {
        user_id: Number(localStorage.getItem('user_id')),
        article_id: article?.art_id,
      };
      api.purchaseArticle.post(objectToSend);
      alert('You have bought this article!');
      return; /*history.push(`/articles/${article?.art_title}`); */
    }
  }

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

  return (
    <MainLayout>
      <div className="divD">
        {article?.user_firstName} {article?.user_lastName}
        <p></p>
      </div>

      <section>
        <h1>{article?.art_title} </h1>
        <Row noGutters>
          <Col md="auto">
            <img src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"></img>
          </Col>
          <Col className="description">{article?.description}</Col>
        </Row>

        <div>{article?.art_body}</div>

        <input type="button" value="test" onClick={togglePopup} />
        {isOpen && (
          <PurchasePopup
            content={
              <>
                <p>
                  This Article is not free, If you wish to view it, press "Buy
                  Article"
                </p>
                <button onClick={oneClickPurchase}> Buy Article </button>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </section>
    </MainLayout>
  );
};

export default IndividualArticle;
