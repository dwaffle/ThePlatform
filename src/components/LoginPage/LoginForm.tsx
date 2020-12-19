import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { userState} from './login.recoil'
import {useRecoilState} from 'recoil'
import { useHistory } from 'react-router';
import {IUserNoPassword} from '../../../services/crud-server/src/models/user'
import api from '../../api'
// import data from '../../data/icon'
import './login.scss'

function LoginForm(){
    const history = useHistory();
    const [ username, setUsername ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    
    async function handleLogin(e:any){

        e.preventDefault();
        const objectToSend = {user_userName:username, user_password:password}
        let token = api.tokens.post( objectToSend );
        if(token){
            let response = await api.login.post({user_userName: username});
            response.data.find((user:any) => {window.localStorage.setItem('user', user.user_userName)});
        }
        history.push('/articles');
    }

    function directToSignUp() {
        history.push('/signup');
    }

    return (<>

            <Row>
                <Col />
                <Col> 

                    <div className="Container">
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
                            
                            
                            <label className="RememberMe" >  
                                <input type="checkbox" id="vehicle1" /> Remember me 
                            </label>
                            <Button className="ButtonSubmit" variant="primary" type="submit" onClick={handleLogin}> Submit</Button>
                            <label> Not on the Platform yet?</label>
                            <Button className="ButtonSubmit" variant="primary" type="submit" onClick={directToSignUp}> Sign up</Button>
                            
                            
                            
                        </Form>
                
                    </div>
                
                </Col>
                <Col />
            </Row>
        
       
   </> );

}

export default LoginForm;