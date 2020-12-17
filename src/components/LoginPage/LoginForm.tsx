import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAuthentication } from '../../data/useAuthentication';
// import data from '../../data/icon'
import './style.scss'

function LoginForm(){

    const authModel = useAuthentication();
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    

    function handleLogin(e:any){
        e.preventDefault();
        authModel.login( username, password );
        console.log(username, password)
    }

    return (
        <Container>
        <Row>
            <Col lg={3}></Col>
            <Col lg={6}>
                <h1>Please Login</h1>

                <Form>
                    <img src="/src/data/icon/login.jpeg" />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={handleLogin}>
                        Submit
                    </Button>
                </Form>
            </Col>
        </Row>
        </Container>
    );

}

export default LoginForm;