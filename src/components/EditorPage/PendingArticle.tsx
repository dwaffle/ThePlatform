import React from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  Card,
  CardDeck,
} from "react-bootstrap";

import "./style.scss";

export default function PendingArticleList() {
    return ( <>
            <div className="PendingArticle">
            {/* style={{ padding:"0 5px  0 10px" }} */}
                <h5 >Articles pending approval : </h5>
                <Row>
                    <Col>
                        <Table  striped bordered hover  variant= "warning">
                            <thead className="thead">
                                <tr>
                                <th>Articles</th>
                                <th>Author</th>
                                <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Godzilla</td>
                                    <td>Hubie Dubios</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Mark</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Frank</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Author</td>
                                    <td>pending</td>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>Jacob</td>
                                    <td>pending</td>
                                </tr>   
                            </tbody>
                        </Table>
        
                    </Col>
                </Row>
                

            </div>
    </>)
}
