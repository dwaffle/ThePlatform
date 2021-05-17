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

  const userIDfromStorage = Number(localStorage.getItem('user_id'));

  const { allUsers } = useArticleList();
  // console.log("all", allUsers)

  const loggedInUser = allUsers.find((a) => a.user_id == userIDfromStorage);

  function dateFix() {
    if (!loggedInUser?.user_creation_date) {
      return loggedInUser?.user_creation_date.split('T')[0];
    }

    return loggedInUser?.user_creation_date.split('T')[0];
  }

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

  function myArticles() {
    return history.push('/MyArticles');
  }

  const userType = (typeID: any) => {
    console.log(typeID);
    if (typeID === 1) {
      return 'Admin';
    }
    if (typeID === 2) {
      return 'Free Member';
    }

    if (typeID === 3) {
      return 'Editor';
    }

    if (typeID === 4) {
      return 'Author';
    }

    if (typeID == 5) {
      return 'Premium Members';
    }
  };

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

      <div className="ProfPageParent">
        <Row>
          <Image className="ImageDisplay" src={userAvatar} roundedCircle />

          <Col className="userDataCol">
            <h2>{loggedInUser?.user_userName}</h2>
            <p>
              <small>User ID: #{loggedInUser?.user_id}</small>
            </p>

            <p> User Type: {userType(loggedInUser?.user_type)}</p>
            <p>{loggedInUser?.user_email}</p>
            <p>Created On: {dateFix()}</p>
          </Col>
        </Row>

        <Row className="ProfButtons">
          <div>
            {/* <Button onClick={paymentInfo}>Payment Info</Button>
          <Button onClick={checkLogin}>Edit</Button> */}
            {isAuthor()}
            <Button onClick={() => setPage('Edit')}>Edit</Button>
            <Button onClick={() => setPage('paymentPage')}>Payment Info</Button>
          </div>
        </Row>
      </div>

      <div className="EditParent">
        {/* <div className="logout">
          <Button variant="primary" type="submit" onClick={onClickLogOut}>
            {' '}
            Log Out
          </Button>
        </div> */}

        <Row>
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
