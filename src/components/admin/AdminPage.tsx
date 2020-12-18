import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
import Organization from './OrganizationSide';
import Member from './MemberSide';
import './style.scss'

// Can manage users’ roles. 

// Add users to role by adding to list by email / username from currently signed up members 

export default function AdminPage( props:{} ){
 

    return <>
        <h1>Admin page</h1>
            <Row>
                <Col>
                    <Organization />
                </Col>
                <Col>
                     <Member />
                </Col>
            </Row>

    </>;

}