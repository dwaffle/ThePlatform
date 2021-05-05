import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {useHistory} from 'react-router';
import './style.scss';

export default function HeaderNavigation(props: {}) {
  const user_id = Number(localStorage.getItem('user_id'));
  const user_type = Number(window.localStorage.getItem('user_type'));
  const history = useHistory();
  //Adds the editor button if the user is an editor or admin according to user_type_lu.  Can change if we want.
  function isEditor() {
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
        <NavDropdown.Item href="/admin">My Admin</NavDropdown.Item>
        // <LinkContainer to="/admin">
        //   <Nav.Link>Admin</Nav.Link>
        // </LinkContainer>
      );
    }
  }

  function logoutHandler() {
    localStorage.clear();
    history.push("/");
  }

  function displayFirstName() {
    const firstName = localStorage.getItem('first_name');
    if (firstName) {
      return firstName;
    } else {
      return;
    }
  }

  function isLoggedIn() {
    if (!localStorage.getItem('token')) {
      return (
        <LinkContainer to="/login">
          <Nav.Link>Login</Nav.Link>
        </LinkContainer>
      );
    } else {
      return (
        <>
          {/* <LinkContainer to="/profile">
          <Nav.Link>My Profile</Nav.Link>
        </LinkContainer> */}
          {/* <LinkContainer to="/">
          <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
        </LinkContainer> */}

          <NavDropdown title={displayFirstName()} id="collasible-nav-dropdown">
            {/* {isEditor()} */}
            <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            {isAdmin()}
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
      );
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
        </Navbar.Collapse>
        <Nav className="navProfile">{isLoggedIn()}</Nav>
      </Navbar>
    </>
  );
}
