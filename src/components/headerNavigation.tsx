import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default function HeaderNavigation( props:{} ){

    return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <LinkContainer exact to="/"><Nav.Link>The Platform</Nav.Link></LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/articles"><Nav.Link>Articles</Nav.Link></LinkContainer>
                    <LinkContainer to="/organization"><Nav.Link>Organizations</Nav.Link></LinkContainer>
                    <LinkContainer to="/series"><Nav.Link>Series</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <input type="search" placeholder="Search" aria-label="Search"></input>
                    <button type="submit">Search</button>
                    <LinkContainer to="/signup"><Nav.Link>Sign Up</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Profile</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}
