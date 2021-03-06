import './style.scss';
import React from 'react';
import unnamed from '../../../../data/icon/unnamed.jpg';
import { Card } from 'react-bootstrap';
export function DummySeriesCard() {
  return (
    <>
      <Card className="dummyCards">
        <Card.Img
          variant="top"
          width="100%"
          src={unnamed}
          className="card-image-top"
        ></Card.Img>
        <Card.Body className="scBody">
          <Card.Title className="scTitle">Series</Card.Title>
          <Card.Text>
            Baby Shark Do do Do do do do
            <p>Baby Shark Do do Do do do do</p>
          </Card.Text>
          <Card.Footer className="scFooter">Authors name</Card.Footer>
        </Card.Body>
      </Card>
    </>
  );
}
