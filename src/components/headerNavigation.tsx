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
                    <LinkContainer to="/wishlist"><Nav.Link>Navigation</Nav.Link></LinkContainer>
                    <LinkContainer to="/cart" className="ml-2">
                        <Button variant="warning" block>My Profile</Button>
                    </LinkContainer> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}