import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import userAvatar from '../../data/icon/userAvatar.jpg';
import './style.scss'



export default function HeaderNavigation( props:{} ){

    return <>
        <Navbar  variant="dark" className="navbarBG" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="navFont">
                    <LinkContainer exact to="/"><Nav.Link>The Platform</Nav.Link></LinkContainer>
                </Nav>
                <Nav className="mr-auto">
                    <LinkContainer to="/articles"><Nav.Link>Articles</Nav.Link></LinkContainer>
                    <LinkContainer to="/organization"><Nav.Link>Organizations</Nav.Link></LinkContainer>
                    <LinkContainer to="/series"><Nav.Link>Series</Nav.Link></LinkContainer>
                    <LinkContainer to="/editor"><Nav.Link>Editor</Nav.Link></LinkContainer>
                    <LinkContainer to="/login"><Nav.Link>Login</Nav.Link></LinkContainer>
                </Nav>
                <Nav>
                    <LinkContainer to="/profile"><Nav.Link>Profile</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>;

}
