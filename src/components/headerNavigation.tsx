import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import userAvatar from '../../data/icon/userAvatar.jpg';
import './style.scss';

export default function HeaderNavigation(props: {}) {
  const user_id = Number(localStorage.getItem('user_id'));
  const user_type = Number(window.localStorage.getItem('user_type'));
  //Adds the editor button if the user is an editor or admin according to user_type_lu.  Can change if we want.
  function isEditor() {
    // const user_type = Number(window.localStorage.getItem('user_type'));
    if (user_type === 1 || user_type === 5) {
      return (
        <LinkContainer to="/editor">
          <Nav.Link>Editor</Nav.Link>
        </LinkContainer>
      );
    }
  }

  //show Amin page for admins only
  function isAdmin() {
    if (user_type === 1) {
      return (
        <LinkContainer to="/admin">
          <Nav.Link>Admin</Nav.Link>
        </LinkContainer>
      );
    }
  }

  function isLoggedIn() {
    if (!localStorage.getItem('token')) {
      return (
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      );
    }
    return (
      <LinkContainer to="/profile">
        <Nav.Link>My Profile</Nav.Link>
      </LinkContainer>
    );
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
            <LinkContainer to="/articles">
              <Nav.Link>Articles</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/organization">
              <Nav.Link>Organizations</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/series">
              <Nav.Link>Series</Nav.Link>
            </LinkContainer>

            {isEditor()}
          </Nav>

          <Nav className="navButtons"></Nav>
          <Nav className="navProfile">
            {isAdmin()}
            {isLoggedIn()}

            {/* <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer> */}
            {/* <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
