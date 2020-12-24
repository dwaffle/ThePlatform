import React from 'react';
import { Container, Row, Col, Table, Button, Form, Card, CardDeck } from 'react-bootstrap';
import MainLayout from '../../layouts/MainLayout';
import './style.scss'

//import Faq from '../components/OrganizationPage';


export default function EditorPage () {

    return <MainLayout>
        Temporary page
        <Row>
            <Col>
                <Table className="TableBody">
                        <thead className="thead">
                            <tr>
                                <th>Pending Articles</th>
                                <th>Author</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                    <td>Godzilla</td>
                                    <td>Hubie Dubios</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Frank</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Author</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Jacob</td>
                                </tr>
                            </tbody>
                </Table>
            </Col>
        </Row>

        <Row>
            <Col>
                <button className="selectArticle" type="submit">Select Article</button>
            </Col>
        </Row>
        

    </MainLayout>
}
