import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import './style.scss';
import api from '../../api';
import { useHistory } from 'react-router';
import userAvatar from '../../data/icon/userAvatar.jpg';
import { useArticleList } from '../ArticleList/articleList';

class Iprofile {
  name: string = '';
  email: string = '';
  phone: string = '';
}

export default function ProfilePage(props: {}) {
  const history = useHistory();
  // Simple Profile Management (name, email, phone)

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
  function displayEmail() {
    if (localStorage.getItem('email')) {
      return <div>{localStorage.getItem('email')}</div>;
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

      <Row>
        <Col>
          <h2>{displayUserName()}</h2>
        </Col>
        <Col className="user_real_name">
          <h3>
            {displayFirstName()} {displayLastName()}
          </h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>{displayEmail()}</h2>
        </Col>
      </Row>

      <Row>
        <Col xs={6} md={4}>
          <Image src={userAvatar} roundedCircle />
        </Col>
      </Row>
      <Button onClick={paymentInfo}>Payment Info</Button>
      <Button onClick={checkLogin}>Edit</Button>
      <Button variant="primary" type="submit" onClick={onClickLogOut}>
        {' '}
        Log Out
      </Button>
      {isAuthor()}
    </>
  );
}
