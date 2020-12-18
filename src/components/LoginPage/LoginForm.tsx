import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useAuthentication } from '../../data/useAuthentication';
import { useHistory } from 'react-router';
import api from '../../api'
// import data from '../../data/icon'
import './login.scss'

function LoginForm(){

    const history = useHistory();
    const authModel = useAuthentication();
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    
    function handleLogin(e:any){
        e.preventDefault();
        const objectToSend = {user_userName:username, user_password:password}
        api.tokens.post( objectToSend );
        history.push('/articles');
    }

    return (
        
        <Container className="Container">
            <Form className="FormLogin">
                <h1 className="LoginLabel">User Login</h1>
                    
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </Form.Group>
                
                <input type="checkbox" id="vehicle1" />
                <label className="RememberMe" >  Remember me </label>
                <Button className="ButtonSubmit" variant="primary" type="submit" onClick={handleLogin}> Submit</Button>
            </Form>
            
        </Container>
    );

}

export default LoginForm;