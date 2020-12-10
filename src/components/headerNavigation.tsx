import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


export default function headerNavigation( props:{} ){

    return <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer exact to="/"><Nav.Link>The Platform</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/"><Nav.Link>Articles</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Organizations</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Series</Nav.Link></LinkContainer>
                    <LinkContainer to="/"><Nav.Link>Profile</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}