import React from "react";
import { Row, Col, CardDeck, Card } from "react-bootstrap";

export default function MemberSide(props: {}) {
  return (
    <>
      <Row>
        <Col>MemberList </Col>
      </Row>

      <Row>
        <Col>Ban Member</Col>
      </Row>

      <Row>
        <Col>Ban Reason Box</Col>
      </Row>

      <Row>
        <Col>UnBan Member</Col>
      </Row>
    </>
  );
}
