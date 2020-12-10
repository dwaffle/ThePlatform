import React, { PropsWithChildren } from 'react';
import HeaderNavigation from '../components/headerNavigation';
import {  Col, Container, Row, Button } from 'react-bootstrap';
// import Footer from '../components/Footer/Footer'


  

export default function MainLayout (props:PropsWithChildren <{}>){

    return (
    <>

        <Container>        
            <HeaderNavigation />
            <Row> 
                <Col>  { props.children }</Col>
            </Row>     
        </Container>

    </>
    );
}