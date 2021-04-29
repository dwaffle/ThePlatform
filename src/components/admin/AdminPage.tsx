import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
import Organization from './OrganizationSide';
import Member from './MemberSide';
import './style.scss';
import { LinkContainer } from 'react-router-bootstrap';

// Can manage users’ roles.

// Add users to role by adding to list by email / username from currently signed up members

export default function AdminPage(props: {}) {
  const user_type = Number(window.localStorage.getItem('user_type'));

  //show Amin page for admins only
  function isAdmin() {
    if (user_type === 1) {
      return (
        <>
          <h1>Admin page</h1>
          <Row>
            <Col>
              <Organization />
            </Col>
            <Col>
              <Member />
            </Col>
          </Row>
        </>
      );
    } else {
      return (
        <>
          <Row>
            <Col>
              <h1>You are not authorised to navigate here, </h1>
            </Col>
          </Row>
        </>
      );
    }
  }

  return <>{isAdmin()}</>;
}
