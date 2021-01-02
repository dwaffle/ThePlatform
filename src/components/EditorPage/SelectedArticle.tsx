import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  CardDeck,
} from "react-bootstrap";
import { IArticle } from "../../../services/crud-server/src/models/article";
import api from "../../api";

import "./style.scss";

const article = [
  {
    art_id: 2,
    art_title: "Godzilla",
    user_author: 1,
    art_creationDate: "2020-10-14T17:14:07.000Z",
    art_price: 0,
    description: "Test desc",
    art_body: "Test body",
    artype_id: 1,
    art_image: null,
  },
];

export default function SelectedArticleList() {
  return (
    <>
      <div className="SelectedArticle">
        <h2> Selected Article </h2>
        <br />
        {article.map((art) => (
          <CardDeck>
            <Card bg="Light" style={{ width: "18rem" }}>
              <Card.Header>{art.art_title},</Card.Header>
              <Card.Body>
                <Card.Title>
                  author : {art.user_author} (Price : {art.art_price} CAD)
                </Card.Title>
                <Card.Text>
                  Description :<br />
                  {art.description}
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        ))}
      </div>
    </>
  );
}
