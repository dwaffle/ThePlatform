import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import MainLayout from '../../../layouts/MainLayout';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../../api';
import { useParams } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import './style.scss';
import { articleListState, userOwnsArticle } from '../articleList';
import { useHistory, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import facebook from '../../../data/icon/facebook.png';
import instagram from '../../../data/icon/instagram.png';
import twitter from '../../..//data/icon/twitter.png';
// import paymentInfo from '../../../api/paymentInfo/paymentInfo';
// import user from '../../../api/user';
import Rating from '../../rating/rating';
// import series from '../../../api/series';

const IndividualArticle = () => {
  //articles without id
  const art = useRecoilValue<IArticle[]>(articleListState);
  //articles with ids
  const [article, setArticle] = useState<IArticle>();

  // state if the user has payment information or not.
  const [userPInfo, setUserPInfo] = useState();

  // assigns an id to one article
  const params = useParams<{ id: string }>();
  // user id... as JSON
  const user_ID = { user_id: Number(localStorage.getItem('user_id')) };
  const userIdNonObject = Number(localStorage.getItem('user_id'));

  //does the user own the article if required?
  const articleOwnership = useRecoilValue(userOwnsArticle);

  //history router
  const history = useHistory();

  //rendering for articles and assigning an id to an article
  useEffect(() => {
    setArticle(art.find((_art) => _art.art_title === params.id));
  }, [params.id]);

  function oneClickPurchase() {
    if (!userPInfo) {
      alert("You don't have any payment information");
    } 
  
      // if (article != undefined) {
        let objectToSend = {
          user_id: Number(localStorage.getItem('user_id')),
          art_id: article?.art_id,
        };
        api.purchaseArticle.post(objectToSend);
        alert('You have bought this article!');
        history.push(`/articles/${article?.art_title}`);
      // }
  }

  function checkArticleType() {
    let checkUserOwnerShip = articleOwnership.some(ch => ch.user_id == userIdNonObject)
    console.log(articleOwnership)
    console.log(checkUserOwnerShip)
    // console.log(articleOwnership)
    if (article?.artype_id !== 2) {
      return <div className="iABody">{article?.art_body}</div>;
    }

    if (!checkUserOwnerShip) {
      return (
        <div className="artBodyParent">
          <p>
            This Article is not free, The main body of the article has been
            hidden.
            <p>
              If you wish to view this article, please support the author by
              purchasing the article.
            </p>
          </p>
          <button onClick={oneClickPurchase}> Buy Article </button>
        </div>
      );
    } 

    if(checkUserOwnerShip) {
      return <div className="iABody">
        {article.art_body}
      </div>
    }
  }

  useEffect(() => {
    api.paymentInfo
      .post(user_ID)
      .then((response) => {
        setUserPInfo(response.data);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }, []);
  function displaySeriesTitle(seriesTitle: any) {
    if (seriesTitle) {
      return seriesTitle;
    }
  }

  return (
    <MainLayout>
      <section>
        <em className="IAHeadline">{article?.art_title} </em>
        <div className="iArticleInfo">
          <p className="iAAuthor">
            {' '}
            <i>written by:</i> {article?.user_userName}
            <a className="socialMedia" href="https://facebook.com/">
              <img src={facebook} />
            </a>
            <a className="socialMedia" href="https://www.instagram.com/">
              <Image src={instagram} />
            </a>
            <a className="socialMedia" href="https://twitter.com/">
              <Image src={twitter} />
            </a>
          </p>
          <p className="pTag">
            <u>Category: {article?.art_category}</u>
          </p>

          <p className="pTag">
            <small>Series:</small>{' '}
            <Link to={`/series/${article?.series_title}`}>
              {displaySeriesTitle(article?.series_title) || null}
            </Link>
          </p>
        </div>
        <Row className="ratingAndDesc">
          <Col className="ratingArea">
            {article && <Rating article_id={article.art_id} />}
          </Col>
          <Col className="descArea">{article?.description}</Col>
        </Row>
        {/* <Rating name="half-rating" defaultValue={2.5} precision={1} /> */}
        {/* {console.log("id+++++" +article?.art_id)} */}
        <Row noGutters>
          <Col md="auto">
            <img
              className="mainImg"
              src="https://honokeana.net/wp-content/uploads/2014/10/sunset-wide-Daane_Honokeana-10-431x1600-1024x276.jpg"
            ></img>
          </Col>
          {/* <Col className="description">{article?.description}</Col> */}
        </Row>
        {checkArticleType()}
        {/* <div className="iABody">{article?.art_body}</div> */}
        {/* <input type="button" value="test" onClick={togglePopup} /> */}
        {/* {isOpen && (
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
        )} */}
      </section>
    </MainLayout>
  );
};

export default IndividualArticle;
