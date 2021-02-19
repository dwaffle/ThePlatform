import React, { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Faq from '../components/OrganizationPage';
import './style.scss';
import api from '../../api';
import { useHistory } from 'react-router';
import userAvatar from '../../data/icon/userAvatar.jpg';

class IprofileChangeRequest {
  user_id: number = 0;
  user_firstName?: string;
  user_lastName?: string;
  user_email?: string;
  user_password?: string;
}

export default function EditProfilePage(props: {}) {
  const history = useHistory();

  const [user_email, setEmail] = useState<string>();
  const [user_firstName, setFirstName] = useState<string>();
  const [user_lastName, setLastName] = useState<string>();
  const [password_entry, setPasswordEntry] = useState<string>();
  const [password_verify, setPasswordVerify] = useState<string>();

  function onClickLogOut() {
    localStorage.clear();
    history.push('/articles');
  }

  function displayUserName() {
    if (window.localStorage.getItem('username')) {
      return <div>{window.localStorage.getItem('username')}</div>;
    } else {
      return <div>Please sign in.</div>;
    }
  }
  function displayEmail() {
    if (localStorage.getItem('email')) {
      let email = localStorage.getItem('email');
      if (email != null) {
        return email;
      } else {
        return;
      }
    } else {
      return;
    }
  }

  function displayFirstName() {
    let user_firstName = localStorage.getItem('first_name');
    if (user_firstName != null) {
      return user_firstName;
    }
  }

  function displayLastName() {
    let lastName = localStorage.getItem('last_name');
    if (lastName != null) {
      return lastName;
    }
  }

  function deleteAccount() {
    if (window.confirm('Are you sure?  This will delete your account!')) {
      api.user.delete(localStorage.getItem('user'));
      localStorage.clear();
    }
  }

  function onsubmit() {
    if (
      password_entry !== password_verify &&
      (password_entry !== '' || password_verify !== '')
    ) {
      alert('Passwords must match to be changed.');
      return;
    }
    const user_id = Number(localStorage.getItem('user_id'));
    //If somehow there is no user, do not send a change request.
    if (user_id == null || undefined || 0) {
      return;
    }

    const changeRequest: IprofileChangeRequest = {
      user_id: user_id,
      user_firstName: user_firstName ? user_firstName : '',
      user_lastName: user_lastName,
      user_email: user_email,
      user_password: password_entry,
    };
    api.user.patch(changeRequest);
    //Get the user's new info after a successful request.
    const username = localStorage.getItem('username');
    api.login.post({ user_userName: username });
    history.push('/profile');
  }

  function passwordVerify() {
    if (password_entry !== password_verify) {
      return <div>Passwords must match to be changed.</div>;
    }
  }

  return (
    <>
      <h1>Editing page</h1>

      <Row>
        <Col>
          <h2>{displayUserName()}</h2>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col>
            Edit Email:{' '}
            <Form.Control
              type="email"
              placeholder={displayEmail()}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            Edit First Name:{' '}
            <Form.Control
              placeholder={displayFirstName()}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col>
            Edit Last Name:{' '}
            <Form.Control
              placeholder={displayLastName()}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            Change Password{' '}
            <Form.Control
              type="password"
              onChange={(e) => setPasswordEntry(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            Re-type New Password{' '}
            <Form.Control
              type="password"
              onChange={(e) => setPasswordVerify(e.target.value)}
            ></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>{passwordVerify()}</Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Image src={userAvatar} roundedCircle />
          </Col>
        </Row>
      </Form>
      <Button variant="primary" onClick={onClickLogOut}>
        {' '}
        Log Out
      </Button>
      <Button variant="primary" type="submit" onClick={onsubmit}>
        Approve Changes
      </Button>
      <Button variant="danger" className="delete-btn" onClick={deleteAccount}>
        Delete Account
      </Button>
    </>
  );
}
