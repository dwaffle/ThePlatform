import { ChangeEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { Card, Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import api from '../api';
import './style.scss';

export default function SignupPage(props: {}) {
  const history = useHistory();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [privacyIsChecked, setPrivacy] = useState<boolean>();
  const [instagramHandle, setInstagramHandle] = useState<string>('');
  const [twitterHandle, setTwitterHandle] = useState<string>('');
  const [facebookHandle, setFacebookHandle] = useState<string>('');

  function onPrivacyTaskHandler(e: ChangeEvent<HTMLInputElement>) {
    setPrivacy(e.target.checked);
  }

  function onsubmit() {
    if (
      !firstName ||
      !lastName ||
      !username ||
      !password ||
      !privacyIsChecked
    ) {
      return;
    }
    const objectToSend = {
      user_firstName: firstName,
      user_lastName: lastName,
      user_email: email,
      user_userName: username,
      user_password: password,
      user_instagram: instagramHandle,
      user_facebook: facebookHandle,
      user_twitter: twitterHandle,
    };
    api.signup.post(objectToSend);
    history.push('/articles');
    return;
  }

  function AllFormsFilledOut() {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !privacyIsChecked
    ) {
      return (
        <div>
          You must fill out all fields marked with a * and accept the Terms and
          Conditions
        </div>
      );
    }
    return null;
  }

  //If signed in, go to user profile else go to signup will go here.
  return (
    <MainLayout>
      <div>
        <div className="signup-ctr">
          <Card className="signup">
            <div className="signup-txt">
              Sign Up:
              <br />
              Please fill in the form to sign up. Fields marked with a * are
              manditory
            </div>
            <Form.Group className="name">
              <Row>
                <Col>
                  <Form.Label>First Name*</Form.Label>
                  <Form.Control
                    className="firstname"
                    type="firstname"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Last Name*</Form.Label>
                  <Form.Control
                    className="lastname"
                    type="lastname"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    className="email"
                    type="email"
                    placeholder="Email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group>
              <Form.Label>Username*</Form.Label>
              <div className="form-narrow">
                <Form.Control
                  className="username"
                  type="username"
                  placeholder="Enter Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password*</Form.Label>
              <div className="form-narrow">
                <Form.Control
                  className="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Form.Label>Instagram Handle</Form.Label>
              <div className="form-narrow">
                <Form.Control
                  className="instagram"
                  placeholder="Enter Instagram Handle"
                  value={instagramHandle}
                  onChange={(e) => setInstagramHandle(e.target.value)}
                />
              </div>
              <Form.Label>Facebook Handle</Form.Label>
              <div className="form-narrow">
                <Form.Control
                  className="facebook"
                  placeholder="Enter Facebook Handle"
                  value={facebookHandle}
                  onChange={(e) => setFacebookHandle(e.target.value)}
                />
              </div>
              <Form.Label>Twitter @</Form.Label>
              <div className="form-narrow">
                <Form.Control
                  className="twitter"
                  placeholder="Enter Twitter Handle"
                  value={twitterHandle}
                  onChange={(e) => setTwitterHandle(e.target.value)}
                />
              </div>
            </Form.Group>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Checkbox
                  className="privacy"
                  onChange={onPrivacyTaskHandler}
                ></InputGroup.Checkbox>
                Accept the Privacy Policy and Terms of Use Agreement*
              </InputGroup.Prepend>
            </InputGroup>
            {AllFormsFilledOut()}
            <Button
              variant="primary"
              type="submit"
              className="submit-btn"
              onClick={onsubmit}
            >
              Submit
            </Button>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
