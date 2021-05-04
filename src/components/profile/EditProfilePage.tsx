import { useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
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
  user_facebook?: string;
  user_twitter?: string;
  user_instagram?: string;
}

export default function EditProfilePage(props: {}) {
  const history = useHistory();

  const [user_email, setEmail] = useState<string>();
  const [user_firstName, setFirstName] = useState<string>();
  const [user_lastName, setLastName] = useState<string>();
  const [user_facebook, setUserFacebook] = useState<string>();
  const [user_instagram, setUserInstagram] = useState<string>();
  const [user_twitter, setUserTwitter] = useState<string>();
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

  function displayFacebook() {
    let facebook = localStorage.getItem('user_facebook');
    if (facebook != null) {
      return facebook;
    }
  }

  function displayInstagram() {
    let instagram = localStorage.getItem('user_instagram');
    if (instagram != null) {
      return instagram;
    }
  }

  function displayTwitter() {
    let twitter = localStorage.getItem('user_twitter');
    if (twitter != null) {
      return twitter;
    }
  }

  function deleteAccount() {
    if (window.confirm('Are you sure?  This will delete your account!')) {
      api.user.delete(localStorage.getItem('user'));
      localStorage.clear();
    }
  }

  function onsubmit() {
    const user_id = Number(localStorage.getItem('user_id'));
    const empty = /^\s+$/;
    if (
      (user_firstName == undefined || user_firstName.match(empty)) &&
      (user_lastName == undefined || user_lastName.match(empty)) &&
      (user_email == undefined || user_email.match(empty)) &&
      (user_facebook == undefined || user_facebook.match(empty)) &&
      (user_instagram == undefined || user_instagram.match(empty)) &&
      (user_twitter == undefined || user_twitter.match(empty))
    ) {
      alert('You must have something to change to change your profile.');
      return;
    }
    if (
      (password_entry !== password_verify &&
        (password_entry !== '' || password_verify !== '')) ||
      password_entry === ''
    ) {
      alert('Passwords must match and not be blank to be changed.');
      return;
    }

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
      user_facebook: user_facebook,
      user_instagram: user_instagram,
      user_twitter: user_twitter,
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
      <div className="HeadlineProfile">
        <p className="h8tch2">Profile Editing Page</p>
      </div>

      <Row>
        <Col>
          <h2>{displayUserName()}</h2>
        </Col>
      </Row>
      <Form>
        <Row>
          <Col>
            Edit Email:{' '}
            <div className="form-narrow">
              <Form.Control
                type="email"
                placeholder={displayEmail()}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={3}>
            Edit First Name:{' '}
            <div className="form-med">
              <Form.Control
                placeholder={displayFirstName()}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </Col>
          <Col>
            Edit Last Name:{' '}
            <div className="form-narrow">
              <Form.Control
                placeholder={displayLastName()}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Change Facebook{' '}
            <div className="form-narrow">
              <Form.Control
                placeholder={displayFacebook()}
                onChange={(e) => setUserFacebook(e.target.value)}
              ></Form.Control>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Change Instagram{' '}
            <div className="form-narrow">
              <Form.Control
                placeholder={displayInstagram()}
                onChange={(e) => setUserInstagram(e.target.value)}
              ></Form.Control>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Change Twitter{' '}
            <div className="form-narrow">
              <Form.Control
                placeholder={displayTwitter()}
                onChange={(e) => setUserTwitter(e.target.value)}
              ></Form.Control>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Change Password{' '}
            <div className="form-narrow">
              <Form.Control
                type="password"
                onChange={(e) => setPasswordEntry(e.target.value)}
              ></Form.Control>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Re-type New Password{' '}
            <div className="form-narrow">
              <Form.Control
                type="password"
                onChange={(e) => setPasswordVerify(e.target.value)}
              ></Form.Control>
            </div>
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
