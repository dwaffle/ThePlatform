import React from 'react';
import {Card, Form, Button} from 'react-bootstrap'
import './style.scss'

export default function SignupPage(){


    return (
        <div className="signup-ctr">
            <Card className="signup">
                <div className="signup-txt">
                    Sign Up:<br />
                    Please fill in the form to sign up.
                </div>
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