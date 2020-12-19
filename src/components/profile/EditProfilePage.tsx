import React from 'react';
import { Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Faq from '../components/OrganizationPage';
import './style.scss'
import api from '../../api'
import { useHistory } from 'react-router';
import userAvatar from '../../data/icon/userAvatar.jpg';


export interface Iprofile {
    name: string;
    email: string;
    phone : string;
}


export default function EditProfilePage( props:{} ){
    const history = useHistory();
    // Simple Profile Management (name, email, phone) 

    function onClickLogOut(){
       localStorage.clear();
       history.push('/articles')
    }


    function displayUserName(){
        if(window.localStorage.getItem('username'))
        {
            return <div>{window.localStorage.getItem('username')}</div>
        } else {
            return <div>Please sign in.</div>
        }
    }
    function displayEmail(){
        if(localStorage.getItem('email')){
            return <div>{localStorage.getItem('email')}</div>
        } else {
            return;
        }
    }

    function deleteAccount(){
        if(window.confirm("Are you sure?  This will delete your account!")){
            api.user.delete(localStorage.getItem('user'))
        }
    }
    return <>

            <h1>Editing page</h1>            

            <Row>
                <Col>
                    <h2>{displayUserName()}</h2>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>{displayEmail()}</h2>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={4}>
                    <Image src={ userAvatar } roundedCircle />
                </Col>
            </Row>
            <Button  href="#">Edit</Button>
            <Button variant="primary" type="submit" onClick={onClickLogOut}> Log Out</Button>
            <Button variant="danger" className="delete-btn" onClick={deleteAccount}>Delete Account</Button>



            

    </>;
}