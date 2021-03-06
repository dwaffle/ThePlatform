import { useState, useEffect } from 'react';
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
import Rating from '../../rating/rating';

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

  const imagecheck = () => {
    if (!article?.art_image) {
      return (
        <Image
          className="mainImg"
          src="https://honokeana.net/wp-content/uploads/2014/10/sunset-wide-Daane_Honokeana-10-431x1600-1024x276.jpg"
          thumbnail
        />
      );
    } else {
      return <Image className="mainImg" src={article.art_image} thumbnail />;
    }
  };

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
    let checkUserOwnerShip = false;
    //Cycle through all a user's bought articles to see if they've already bought it.
    for (let i = 0; i < articleOwnership.length; i++) {
      if (articleOwnership[i]?.art_id == article?.art_id) {
        checkUserOwnerShip = true;
        break;
      }
    }

    if (article?.artype_id !== 2) {
      return <div className="iABody">{article?.art_body}</div>;
    }
    //If they haven't bought it and it's a paid article, show the message.
    if (!checkUserOwnerShip && article.artype_id === 2) {
      return (
        <div className="artBodyParent">
          <p>
            This Article is not free.
            <br />
            The main body of the article has been hidden.
            <p>
              If you wish to view this article, please support the author by
              purchasing the article.
            </p>
          </p>
          <button onClick={oneClickPurchase} className="purchase-button">
            {' '}
            Buy Article{' '}
          </button>
        </div>
      );
    }
    //Otherwise, they own it, show the article.
    if (checkUserOwnerShip) {
      return <div className="iABody">{article.art_body}</div>;
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
      <Row>
        <Col />
        <Col xs={8}>
          <Row>
            <div>
              <p className="IAHeadline">{article?.art_title} </p>
              <Row>{imagecheck()}</Row>

              <Row>
                <Col className="justify-content-md-center">
                  <div className="article-main">{checkArticleType()}</div>
                </Col>
                <Col className="author-info">
                  <p className="pTag">
                    Category: <strong>{article?.art_category}</strong>
                  </p>

                  <div className="series-container">
                    <p className="pTag">
                      Series:
                      {article?.series_title ? (
                        <Link
                          to={`/series/${article?.series_title}`}
                          className="series-link"
                        >
                          {displaySeriesTitle(article?.series_title) || null}
                        </Link>
                      ) : (
                        ' Uncategorized'
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="iAAuthor">
                      <i>Written by:</i>
                      <strong>{article?.user_userName}</strong>
                      <br />
                      <a
                        className="socialMedia"
                        href="{https://facebook.com/}"
                        target="_blank"
                      >
                        <img src={facebook} />
                      </a>
                      <a
                        className="socialMedia"
                        href="https://www.instagram.com/"
                        target="_blank"
                      >
                        <Image src={instagram} />
                      </a>
                      <a
                        className="socialMedia"
                        href="https://twitter.com/"
                        target="_blank"
                      >
                        <Image src={twitter} />
                      </a>
                    </p>

                    {article && <Rating article_id={article.art_id} />}
                  </div>
                </Col>
                <br />
              </Row>
            </div>
          </Row>
        </Col>

        <Col />
      </Row>
    </MainLayout>
  );
};

export default IndividualArticle;
