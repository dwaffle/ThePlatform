import React, { PropsWithChildren } from 'react';
import HeaderNavigation from '../components/headerNavigation';
import GoUpButton from '../components/topButton/topButton';
import { Col, Container, Row } from 'react-bootstrap';
import './style.scss';

export default function MainLayout(props: PropsWithChildren<{}>) {
  return (
    <>
      <Container className="container">
        <HeaderNavigation />
        <Row>
          <Col> {props.children}</Col>
        </Row>
        <GoUpButton />
      </Container>
    </>
  );
}
