import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router';
import './style.scss';
import { useState } from 'react';

import { ImUser , ImExit, ImEnter, ImPlus, ImCog, ImPaintFormat, ImTree, ImFlag, ImNewspaper} from "react-icons/im";




export default function HeaderNavigation(props: {}) {

  const user_id = Number(localStorage.getItem('user_id'));
  const user_type = Number(window.localStorage.getItem('user_type'));

  const [backGround,setBackGround] = useState(false);
  
  const history = useHistory();

  //Adds the editor button if the user is an editor or admin according to user_type_lu.  Can change if we want.
  function isEditor() {
    if (user_type === 1 || user_type === 5) {
      return (
        <LinkContainer to="/editor">
          <Nav.Link>Editor <ImPaintFormat/></Nav.Link>
        </LinkContainer>
      );
    }
  }

  //show Amin page for admins only
  function isAdmin() {
    if (user_type === 1) {
      return (
        <NavDropdown.Item href="/admin"><ImCog/> Admin  </NavDropdown.Item>
      );
    }
  }

  function logoutHandler() {
    localStorage.clear();
    history.push('/');
  }

  function displayFirstName() {
    const firstName = localStorage.getItem('first_name');
    if (firstName) {
      return firstName.toLocaleUpperCase();
    } else {
      return;
    }
  }

  const isAuthor = () => {
    if (user_type == 1 || user_type == 4) {
      return (
        <NavDropdown.Item href="/newArticle"><ImPlus/> Add Article </NavDropdown.Item>
      );
    }
  };

  function isLoggedIn() {
    if (!localStorage.getItem('token')) {
      return (
        <LinkContainer to="/login">
          <Nav.Link><ImEnter/> Login </Nav.Link>
        </LinkContainer>
      );
    } else {
      return ( 
        <>

          <NavDropdown title= {<ImUser/>} id="collasible-nav-dropdown">
            <NavDropdown.Item href="/profile">
              <h4> {displayFirstName()}</h4>See your profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            {isAdmin()}
            <NavDropdown.Divider />
            {isAuthor()} 
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={logoutHandler}><ImExit/> Logout </NavDropdown.Item>
          </NavDropdown>
        </>
      );
    }
  }

  const changeBackground = () => {

    if(window.scrollY >= 20) { 
      setBackGround(true);
    }
    else {
      setBackGround(false)
    }
  }

window.addEventListener('scroll',changeBackground);

  return (
    <>
      <Navbar sticky="top"  bg= {backGround?"primary":"dark"} className="navbarBG" variant="dark"  collapseOnSelect expand="md">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <LinkContainer exact to="/">
              <Nav.Link>The Platform</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/articles">
              <Nav.Link>Articles <ImNewspaper/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/organization">
              <Nav.Link>Organizations <ImFlag/></Nav.Link>
            </LinkContainer>
            <LinkContainer to="/series">
              <Nav.Link>Series <ImTree/></Nav.Link>
            </LinkContainer>

            {isEditor()}
          </Nav>
        </Navbar.Collapse>
        {/* <Nav> {isUserAuthor()} </Nav> */}
        <Nav className="navProfile">{isLoggedIn()}</Nav>
      </Navbar>
    </>
  );
}
