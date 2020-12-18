import React, { useEffect, useState } from 'react';
import { Row, Col, CardDeck, Card, Table } from 'react-bootstrap';


export interface IOrganization {
    organization_id: number;
    organization_title: string;
    organization_price: number;
    organization_type: string;
    organization_status: boolean;

}

let organization : IOrganization = {

    organization_id:1,
    organization_title: "White water",
    organization_price: 5000,
    organization_type: "constarction",
    organization_status: true

};


// const { myOrganization, addOrganization } = useState( );







// export default function OrganizationSide( props:{organization:IOrganization} ){

export default function OrganizationSide( props:{} ){
    return <>

            <Row>
                    
                    <Col>
                        <h3>organization List</h3>
                        <Table striped bordered hover variant ="dark">
                            <thead>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Status</th>
                                                
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Title</td>
                                    <td>Type</td>
                                    <td>Price</td>
                                    <td>active</td>

                                </tr>
                                {/* <tr>
                                    <td>{ props.organization.organization_title }</td>
                                    <td>{ props.organization.organization_type}</td>
                                    <td>{ props.organization.organization_price}</td>
                                    <td>{ props.organization.organization_status}</td>

                                </tr> */}
                            </tbody>
                        </Table>
                    </Col>
            </Row>

            <Row>
                <Col>Ban Organization</Col>
            </Row>

            <Row>
                <Col>Ban Reason Box</Col>
            </Row>

            <Row>
                <Col>UnBan Member</Col>
            </Row>
    </>;

}