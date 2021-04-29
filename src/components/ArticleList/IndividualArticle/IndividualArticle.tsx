import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import MainLayout from '../../../layouts/MainLayout';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../../api';
import { useParams } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import './style.scss';
import { articleListState, userOwnsArticle } from '../articleList';
import { useHistory, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import facebook from '../../../data/icon/facebook.png';
import instagram from '../../../data/icon/instagram.png';
import twitter from '../../..//data/icon/twitter.png';
import paymentInfo from '../../../api/paymentInfo/paymentInfo';
import user from '../../../api/user';
import Rating from '../../rating/rating';

const IndividualArticle = () => {
  //articles without id
  const art = useRecoilValue<IArticle[]>(articleListState);
  //articles with ids
  const [article, setArticle] = useState<IArticle>();

  // assigns an id to one article
  const params = useParams<{ id: string }>();
  // user id... as JSON
  const user_ID = { user_id: Number(localStorage.getItem('user_id')) };

  //does the user own the article if required?
  const articleOwnership = useRecoilValue(userOwnsArticle);

  //history router
  const history = useHistory();
  //rendering for articles and assigning an id to an article
  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
    // togglePopup()
  }, [params.id]);

  // if the article is a paid article, check to see if the user owns it
  // if not, enforce pop up where they can purchase the article

  //popup state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // state if the user has payment information or not.
  const [userPInfo, setUserPInfo] = useState();
  // button functionality to set the state of the popup
  // makes api request to check payment information
  const togglePopup = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = 'hidden';
    if (isOpen) {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    api.paymentInfo
      .post(user_ID)
      .then((response) => {
        setUserPInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);

  // Function enabling a user to purchase an article

  function oneClickPurchase() {
    if (!userPInfo) {
      alert("You don't have any payment information");
    } else {
      if (article != undefined) {
        let objectToSend = {
          user_id: Number(localStorage.getItem('user_id')),
          art_id: article.art_id,
        };
        api.purchaseArticle.post(objectToSend);
        alert('You have bought this article!');
        history.push(`/articles/${article.art_title}`);
      }

      return;
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
      <section>
        <h1>{article?.art_title} </h1>
        {/* <Rating name="half-rating" defaultValue={2.5} precision={1} /> */}
          {/* {console.log("id+++++" +article?.art_id)} */}
          
        { article && <Rating article_id = {article.art_id} />}
        <div className="articleDetails">
          {article?.user_firstName + ' ' + article?.user_lastName}

          <a className="socialMedia" href="https://facebook.com/">
            <img src={facebook} />
          </a>
          <a className="socialMedia" href="https://www.instagram.com/">
            <Image src={instagram} />
          </a>
          <a className="socialMedia" href="https://twitter.com/">
            <Image src={twitter} />
          </a>
        </div>

        <Row noGutters>
          <Col md="auto">
            <img
              className="mainImg"
              src="https://image.shutterstock.com/image-photo/extra-wide-panorama-gorgeous-forest-260nw-476416021.jpg"
            ></img>
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
