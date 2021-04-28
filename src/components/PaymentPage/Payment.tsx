import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
// import Image from "react-bootstrap/Image";
//import Faq from '../components/OrganizationPage';
import './style.scss';
import api from '../../api';
import { useHistory } from 'react-router';
// import userAvatar from "../../data/icon/userAvatar.jpg";

interface IPaymentInformation {
  user_id: number;
  cardholder_firstame: string;
  cardholder_lastname?: string;
  card_no: number;
  card_expiry: string;
  card_cvv: number;
}

export default function EditPaymentPage(props: {}) {
  const history = useHistory();
  const [cardholder_firstname, setFirstName] = useState<string>();
  const [cardholder_lastname, setLastName] = useState<string>();
  const [card_no, setCardNo] = useState<string>();
  const [card_cvv, setCardCvv] = useState<string>();
  const [card_expiry, setCardExpiry] = useState<string>();

  function onClickLogOut() {
    localStorage.clear();
    history.push('/articles');
  }

  useEffect(() => {
    const paymentInfo = {
      user_id: Number(localStorage.getItem('user_id')),
    };
    api.paymentInfo.post(paymentInfo).then((response) => {
      if (response.data[0] !== undefined) {
        history.push('/ChangePaymentPage');
        console.log(response.data[0]);
        console.log('quack');
      }
    });
  });

  function getUserId() {
    const user = window.localStorage.getItem('user_id');
    if (user) {
      return user;
    } else {
      alert('Please sign in first.');
    }
  }

  function displayUserName() {
    if (window.localStorage.getItem('username')) {
      return <div>{window.localStorage.getItem('username')}</div>;
    } else {
      return <div>Please sign in.</div>;
    }
  }

  function checkCardNo() {
    if (card_no == undefined || card_no.length != 16 || !Number(card_no)) {
      return (
        <div className="card-no-hint">
          Card numbers must be 16 digits with no spaces.
        </div>
      );
    }
  }

  function checkCvv() {
    if (card_cvv == undefined || card_cvv.length != 3 || !Number(card_cvv)) {
      return (
        <div className="cvv-hint">
          Cvvs are three digits on the back of your card.
        </div>
      );
    }
  }

  function onClickGoProfile() {
    history.push('/profile');
  }

  function onsubmit() {
    const userId = getUserId();
    if (
      !cardholder_firstname ||
      !cardholder_lastname ||
      !card_no ||
      !card_cvv ||
      !card_expiry ||
      !userId
    ) {
      alert('All fields need to be filled out, and you need to be signed in.');
      return;
    }

    const paymentInfoSubmisson = {
      user_id: userId,
      first_name: cardholder_firstname,
      last_name: cardholder_lastname,
      cardNo: card_no,
      expiry_date: card_expiry,
      cvv: card_cvv,
    };
    api.payment.post(paymentInfoSubmisson);
    history.push('/profile');
    alert('Success');
  }

  return (
    <>
      <h1>Payment Information page for {displayUserName()}</h1>

      <Form>
        <Row>
          <Col md={3}>
            Cardholder First Name:{' '}
            <div className="form-med">
              <Form.Control onChange={(e) => setFirstName(e.target.value)} />
            </div>
          </Col>
          <Col>
            Cardholder Last Name:{' '}
            <div className="form-narrow">
              <Form.Control className="form-narrow" onChange={(e) => setLastName(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Card Number:{' '}
            <div className="form-narrow">
              <Form.Control onChange={(e) => setCardNo(e.target.value)} />
            </div>
            {checkCardNo()}
          </Col>
        </Row>
        <Row>
          <Col>
            Card Expiry:{' '}
            <div className="form-narrow">
              <Form.Control onChange={(e) => setCardExpiry(e.target.value)} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Card CVV:{' '}
            <div className="form-narrow">
              <Form.Control onChange={(e) => setCardCvv(e.target.value)} />
            </div>
          </Col>
        </Row>
        {checkCvv()}
      </Form>
      <Button variant="primary" onClick={onClickGoProfile}>
        {' '}
        Back to Profile
      </Button>
      <Button
        className="sendInfo"
        variant="success"
        type="submit"
        onClick={onsubmit}
      >
        Submit Payment Information
      </Button>
    </>
  );
}
