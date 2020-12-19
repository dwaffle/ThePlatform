import React from 'react';
import { Row, Col, CardDeck, Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
//import Faq from '../components/OrganizationPage';
import './style.scss'
import { useHistory } from 'react-router';
import userAvatar from '../../data/icon/userAvatar.jpg';


export interface Iprofile {
    name: string;
    email: string;
    phone : string;
}


export default function ProfilePage( props:{} ){
    const history = useHistory();
    // Simple Profile Management (name, email, phone) 

    function onClickLogOut(){
       localStorage.clear();
       history.push('/articles')
    }

    function displayUserName(){
        if(localStorage.getItem('user'))
        {
            return <div>{window.localStorage.getItem('user')}</div>
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
            alert('Deleted');
        }
    }
    return <>

            <h1>Profile page</h1>            

            <Row>
                <Col>
                    <h2>{displayUserName()}</h2>
                </Col>
                <Col>
                    <h2>type of User</h2>
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