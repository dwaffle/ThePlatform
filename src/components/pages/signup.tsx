import React from 'react';
import {Card, Form, Button, Row, Col} from 'react-bootstrap'
import './style.scss'

export default function SignupPage(){


    return (
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
                <Button variant="primary" type="submit">Submit</Button>
            </Card>
        </div>
    )
}