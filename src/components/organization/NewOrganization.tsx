import React, {useState} from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import api from '../../api';
//import Faq from '../components/OrganizationPage';
import './style.scss';



export default function NewOrganizationForm(props: {}){

    const [orgName, setOrgName] = useState<string>()
    const [orgPrice, setOrgPrice] = useState<string>()

    function submitHandler(){
        //Make sure we have an org name and price before submitting.  0 for free orgs, any other number greater than 0 for paid orgs.
        //Decided to handle seperating free/non-free on the back end by checking for a price > 0.
            if(orgName !== undefined && orgPrice !== undefined && Number(orgPrice) >= 0){
            const orgToSubmit = {
                org_title: orgName,
                org_price: orgPrice
            }
            api.organization.post(orgToSubmit)
        }
    }
    
    return (
        <>
            <Row>
                <Col>
                        <div className="Container">
                            <Form className="FormLogin">
                            <h1 className="LoginLabel">Create Org</h1>

                            <Form.Group controlId="formOrgCreation">
                                <Form.Label>Org Name</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Org Name"
                                value={orgName}
                                onChange={(e) => setOrgName(e.target.value)}
                                />
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                type="text"
                                placeholder="Price"
                                value={orgPrice}
                                onChange={(e) => setOrgPrice(e.target.value)}
                                />
                                <Button onClick={submitHandler}>Submit</Button>
                            </Form.Group> 
                            
                        </Form>
                    </div> 
                </Col>
            </Row>
        </>
    )
}