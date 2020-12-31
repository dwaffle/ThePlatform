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
  ButtonGroup,
} from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";
import PendingArticle from "./PendingArticle";
import RejectArticle from "./RejectArticle";
import SelectedArticle from "./SelectedArticle";

export default function EditorPage() {
  return (
    <MainLayout>
      <Row>
        <Col>
          <PendingArticle rows={3} />
          <Button variant="primary" block>
            {" "}
            Select Article
          </Button>
        </Col>
        <Col xs={8}>
          <SelectedArticle />
          <RejectArticle />
          <Row>
            <Col xs={7}>
              <Button variant="primary" block>
                Reject Article{" "}
              </Button>
              <Button variant="primary" block>
                Approve Article
              </Button>
            </Col>
            <Col></Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
  );
}
