import React from 'react';
import { Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Faq from '../components/OrganizationPage';
import './style.scss'

import userAvatar from '../../data/icon/userAvatar.jpg';


export interface Iprofile {
    name: string;
    email: string;
    phone : string;
}


export default function ProfilePage( props:{} ){
    
    // Simple Profile Management (name, email, phone) 



    return <>

            <h1>Profile page</h1>            

            <Row>
                <Col>
                    <h2>User Name</h2>
                </Col>
                <Col>
                    <h2>type of User</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>email</h2>
                </Col>
                <Col>
                    <h2>Phone</h2>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                    <Image src={ userAvatar } roundedCircle />
                </Col>
            </Row>
            <Button  href="#">Edit</Button>



            

    </>;
}