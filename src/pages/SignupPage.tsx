import React from 'react';
import MainLayout from '../layouts/MainLayout'
import {Card, Form, Button, Row, Col, InputGroup} from 'react-bootstrap'
import HeaderNavigation from '../components/headerNavigation'
import './style.scss'

export default function SignupPage(props:{}){

    //If signed in, go to user profile else go to signup will go here.
    return (
        <MainLayout>
        <div>
        <div className="signup-ctr">
            <Card className="signup">
                <div className="signup-txt">
                    Sign Up:<br />
                    Please fill in the form to sign up.
                </div>
                <Form.Group className="name">
                <Row >
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="firstname" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Form.Label className="lastname">Last Name</Form.Label>
                        <Form.Control type="lastname" placeholder="Last Name" />
                    </Col>
                </Row>
                </Form.Group>
                <Form.Group className="username">
                    
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" />
                </Form.Group>
                <Form.Group className="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Checkbox className="privacy"></InputGroup.Checkbox>Accept the Privacy Policy and Terms of Use Agreement
                    </InputGroup.Prepend>
                </InputGroup>
                <Button variant="primary" type="submit" className="submit">Submit</Button>
            </Card>
        </div>
    </div>
    </MainLayout>
    )
}