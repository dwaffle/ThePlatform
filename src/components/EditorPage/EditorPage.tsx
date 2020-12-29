import React from "react";
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
import MainLayout from "../../layouts/MainLayout";
import PendingArticle from "./PendingArticle";
import RejectArticle from "./RejectArticle";

export default function EditorPage() {
  return (
    <MainLayout>

      <Row>
        <Col>
          <PendingArticle />

        </Col>
        <Col xs={8}>
          <div className="SelectedArticle">
            <h2 > Selected Article </h2>
          </div>
          <RejectArticle />
        </Col>
      </Row>

      <Row>
        <Col>
          <Row>
          
            <Col  >
              <Button variant="primary"  block> Select Article</Button>
            </Col>
   
          </Row>
        </Col>
        <Col xs={8}>

        <Row>
            
            <Col  xs={7}>
              <Button variant="primary"  block>Reject Article </Button>
             <Button variant="primary"  block>Approve Article</Button>
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>         
        </Col>
      </Row>

    </MainLayout>
  );
}
