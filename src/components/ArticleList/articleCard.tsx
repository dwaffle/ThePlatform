import React from "react";
import "./style.scss";
import { Card } from "react-bootstrap";
import { IArticle } from "../../../services/crud-server/src/models/article";

export default function Article(props: IArticle) {
  return (
    <Card className="Card">
      <Card.Body>
        <Card.Header>{props.art_title}</Card.Header>
        <Card.Title>{props.user_author}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card>
  );
}
