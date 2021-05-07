import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './style.scss';
import api from '../../api';
import { useHistory } from 'react-router';
import userAvatar from '../../data/icon/userAvatar.jpg';
import { useArticleList } from '../ArticleList/articleList';
import EditProfilePage from './EditProfilePage';
import ChangePaymentPage from '../PaymentPage/ChangePaymentPage';

class Iprofile {
  name: string = '';
  email: string = '';
  phone: string = '';
}

export default function ProfilePage(props: {}) {
  const history = useHistory();
  // Simple Profile Management (name, email, phone)
  // Sets the open "edit fields"
  const [page, setPage] = useState('');
  // console.log('page', page);

  function onClickLogOut() {
    localStorage.clear();
    history.push('/articles');
  }

  function checkLogin() {
    if (window.localStorage.getItem('username')) {
      history.push('/EditProfilePage');
    } else {
      alert('Please log in first');
    }
  }

  function displayUserName() {
    if (window.localStorage.getItem('username')) {
      return <div>{window.localStorage.getItem('username')}</div>;
    } else {
      return <div>Please sign in.</div>;
    }
  }

  function displayFirstName() {
    const firstName = localStorage.getItem('first_name');
    if (firstName) {
      return firstName;
    } else {
      return;
    }
  }

  function displayLastName() {
    const lastName = localStorage.getItem('last_name');
    if (lastName) {
      return lastName;
    } else {
      return;
    }
  }

  function displayUserID() {
    const userID = localStorage.getItem('user_id');
    if (userID) {
      return userID;
    } else {
      return;
    }
  }
  function displayEmail() {
    const email = localStorage.getItem('email');
    if (email) {
      return email;
    } else {
      return;
    }
  }

  function paymentInfo() {
    history.push('/EditPaymentPage');
  }

  const { articleList, setArticleList } = useArticleList();

  function myArticles() {
    return history.push('/MyArticles');
  }

  const isAuthor = () => {
    let userType = Number(localStorage.getItem('user_type'));

    let myArt = () => {
      return history.push('/myArticles');
    };

    if (userType == 1 || userType == 4) {
      return <Button onClick={myArt}> My Articles </Button>;
    }
  };

  return (
    <>
      <div className="HeadlineProfile">
        <p className="h8tch2">Profile page</p>
      </div>

      <div className="containerParent">
        <Row className="profileEdit">
          <Col className="marginPadding">
            <Image className="ImageDisplay" src={userAvatar} roundedCircle />
            <h6>{displayUserName()}</h6>
          </Col>
          <Col className="profileDirectory">
            <div className="detailStyle">
              <p>
                {displayFirstName()} {displayLastName()}{' '}
              </p>
              <p>Email: {displayEmail()}</p>

              <p>User ID: {displayUserID()}</p>
            </div>

            {/* <Button onClick={paymentInfo}>Payment Info</Button>
          <Button onClick={checkLogin}>Edit</Button> */}
            {isAuthor()}
            <Button variant="secondary" onClick={() => setPage('Edit')}>
              Edit
            </Button>
            <Button variant="secondary" onClick={() => setPage('paymentPage')}>
              Payment Info
            </Button>
            <Button variant="primary" type="submit" onClick={onClickLogOut}>
              {' '}
              Log Out
            </Button>
          </Col>

          <Col>
            <div>
              {page === 'Edit' && <EditProfilePage />}
              {page === 'paymentPage' && <ChangePaymentPage />}
              {/* {page === "contact" && <Contact />} */}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
