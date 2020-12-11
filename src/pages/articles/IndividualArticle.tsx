import React from 'react';
import MainLayout from '../../layouts/MainLayout'
import { Col, Container, Row, Button} from 'react-bootstrap';
import './style.scss'


export default function IndividualArticle( props:{} ){

    return <MainLayout>
        
        <Container className="containerBG">
            <Row>
                <Col>
                    Price
                    <div>
                        Category
                    </div>
                </Col>
                <Col>
                Title
                <div>
                    Author
                </div>
                </Col>
                <Col>
                Rating
                <div>
                <Button variant="success" block>Rate Article</Button>
                </div>
                </Col>
            </Row>
            <Row>
                <article className="articleDesc">
                    Description will go here
                </article>
            </Row>
            <Row>
                <article className="articleBody">
                    Body and preview
                </article>
            </Row>
            <Row>
                <Col>Stats</Col>
                <Col>Series</Col>
                <Col>Tags/Keywords</Col>
            </Row>
        </Container>
        
    </MainLayout>;

}