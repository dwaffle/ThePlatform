import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import userAvatar from "../../data/icon/userAvatar.jpg";
import "./style.scss";

export default function HeaderNavigation(props: {}) {
  //Adds the editor button if the user is an editor or admin according to user_type_lu.  Can change if we want.
  function isEditor(){
    const user_type = Number(window.localStorage.getItem('user_type'))
    if(user_type === 1 || user_type === 5){
      return (
        <LinkContainer to="/editor">
        <Nav.Link>Editor</Nav.Link>
        </LinkContainer>)
   } 
  }

  return (
    <>
      <Navbar variant="dark" className="navbarBG" collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navFont">
            <LinkContainer exact to="/">
              <Nav.Link>The Platform</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="navButtons">
            <LinkContainer to="/articles">
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/organization">
              <Nav.Link>Organizations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/series">
              <Nav.Link>Series</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            {isEditor()}
          </Nav>
          <Nav className="navProfile">
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
