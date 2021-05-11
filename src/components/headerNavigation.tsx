import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router';
import './style.scss';

export default function HeaderNavigation(props: {}) {
  const user_id = Number(localStorage.getItem('user_id'));
  const user_type = Number(window.localStorage.getItem('user_type'));
  const history = useHistory();

  //Adds the editor button if the user is an editor or admin according to user_type_lu.  Can change if we want.
  function isEditor() {
    if (user_type === 1 || user_type === 5) {
      return (
        // <NavDropdown.Item href="/editor">Editor</NavDropdown.Item>
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
    history.push('/');
  }

  function displayFirstName() {
    const firstName = localStorage.getItem('first_name');
    if (firstName) {
      return firstName;
    } else {
      return;
    }
  }

  const isUserAuthor = () => {
    if (user_type == 1 || user_type == 4) {
      return (
        <LinkContainer to="/newArticle">
          <Nav.Link>Create New Article</Nav.Link>
        </LinkContainer>
      )
    }
  };

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
      {/* <Navbar className="navbarBG" collapseOnSelect expand="md" bg="dark" variant="dark">
  <Navbar.Brand href="/">The Platform</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/articles">Articles</Nav.Link>
      <Nav.Link href="/organization">Organizations</Nav.Link>
      <Nav.Link href="/series">Series</Nav.Link>
    </Nav>
    <Nav>
    <Nav className="navProfile">{isLoggedIn()}</Nav>
    </Nav>
  </Navbar.Collapse>
</Navbar> */}

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
        <Nav> {isUserAuthor()} </Nav>
        <Nav className="navProfile">{isLoggedIn()}</Nav>
      </Navbar>
    </>
  );
}
