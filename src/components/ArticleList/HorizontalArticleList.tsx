import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import "./style.scss";
import { Row, Col, Button, Form, Card, CardDeck } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useArticleList } from "./articleList";

export default function HorizontalArticles(props: { rows: number }) {
  const { articleList, setArticleList } = useArticleList();
  // Only allows published/approved articles to be displayed
  const approvedArticle = articleList.filter((a) => a.art_is_approved === 1);
  const history = useHistory();

  // Allows only users that are authors in the database to create a new article
  let isAuthor = (e: any) => {
    e.preventDefault();
    let userType = Number(localStorage.getItem("user_type"));
    if (userType != 1) {
      alert("You must be an author to create an article");
    } else {
      return history.push("/newArticle");
    }
  };

  //popup state
  const [isOpen, setisOpen] = useState<boolean>(false);

  // button functionality to set the state of the popup
  const togglePopup = (price:any) => {
    //need to figure out how to make price a defining property without displaying the price
    setisOpen(!isOpen);
  };
  //Content of this popop is held in the mainlayout
  // Will make popup not show popop if the article is free soon
  const PurchasePopup = (props: any) => {
    function oneClickPurchase() {
      // needs a user to have their payment info filled in
    }
    return (
      <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
          {props.content}
        </div>
      </div>
    );
  };

  return (
    <MainLayout>
      <Row className="CardFeatured">
        <Col>
          <CardDeck>
            <Card className="cardStyle">
              <Card.Header className="cardHeader">
                The card styling for all articles will be changed.
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  <br />
                  <a href=""> See more </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>

      <div className="filter">
        <Form>
          <Row>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." value="">
                <option value="">Show All...</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="Search Articles..." />
            </Col>
            <Col>
              {" "}
              <Button onClick={isAuthor}>Create New</Button>
            </Col>
          </Row>
        </Form>
      </div>

      <Row></Row>
      <div className="viewArticles">
        {approvedArticle.map((art, index) => (
          <div key={index}>
            <Card className="Card">
              <Card.Header className="CardHeader">
                {" "}
                <input
                  type="button"
                  value={art.art_title}
                  onClick={togglePopup}
                />
                {isOpen && <PurchasePopup
                  content={<>
                    <button> Purchase Button Here </button>
                    <p></p>
                    <Link to={`/articles/${art.art_title}`}> Temporary Link to article </Link>
                  </>}
                  handleClose={togglePopup}
                />}
                <div>
                  {" "}
                  Author: {art.user_firstName}
                  {art.user_lastName}{" "}
                </div>
              </Card.Header>

              <Card.Body className="CardBody">
                <Card.Text className="CardText">{art.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
