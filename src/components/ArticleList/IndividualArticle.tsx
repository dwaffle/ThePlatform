import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import {IArticle} from './Articles';
import Rating from 'react-rating'

import './style.scss'
import {Container, Row, Col } from 'react-bootstrap';


export default function IndividualArticle () {

    const [rating1, setRating1] = useState(0);
    
    


    return <MainLayout>

        <Container className="ContainerPosition">

            <Row className="articleTitle" > Godzilla Strikes Again! </Row>
            <Row className="articleAuthor"> Author: Hubie Dubios </Row>
            <Row> 
                <Col> Fiction </Col>
            </Row>

            <Row xs={1} md={4} lg={6}>
                <Col> 
                    <Rating  initialRating={rating1} onClick={rate => setRating1(rate)} /> 
                </Col>
        
            </Row>

            <Row>
                <Col> <button type="submit">$5.99</button> </Col>
            </Row>

            <Row><Col>Description</Col></Row>
            <Row className=" articleDesc ">
                <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus quis erat nec vehicula. Morbi aliquam vitae eros sit amet cursus. Sed feugiat interdum mi sit amet faucibus. Nam leo lorem, sollicitudin sit amet tortor eget, iaculis finibus felis. Aliquam faucibus in urna non tempus. Proin pretium massa quis felis tempor dignissim ac nec eros. Aliquam eget tellus nec ligula dapibus interdum. Nunc egestas mollis elit et interdum. Morbi diam turpis, scelerisque nec aliquet et, hendrerit in dui. Nam nec lacus nec mi sollicitudin pretium eu sed purus. Nullam ac rutrum risus. Ut at mi eros. Aenean porta diam vel interdum ullamcorper. Nullam ac malesuada turpis. Vivamus nec enim posuere, pretium urna ultricies, commodo augue. Donec ullamcorper risus libero, ut convallis metus rutrum a. 
                </Col>
            </Row>


            <Row><Col>Body</Col></Row>
            <Row className="articleBody">
                <Col>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus quis erat nec vehicula. Morbi aliquam vitae eros sit amet cursus. Sed feugiat interdum mi sit amet faucibus. Nam leo lorem, sollicitudin sit amet tortor eget, iaculis finibus felis. Aliquam faucibus in urna non tempus. Proin pretium massa quis felis tempor dignissim ac nec eros. Aliquam eget tellus nec ligula dapibus interdum. Nunc egestas mollis elit et interdum. Morbi diam turpis, scelerisque nec aliquet et, hendrerit in dui. Nam nec lacus nec mi sollicitudin pretium eu sed purus. Nullam ac rutrum risus. Ut at mi eros. Aenean porta diam vel interdum ullamcorper. Nullam ac malesuada turpis. Vivamus nec enim posuere, pretium urna ultricies, commodo augue. Donec ullamcorper risus libero, ut convallis metus rutrum a. 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus quis erat nec vehicula. Morbi aliquam vitae eros sit amet cursus. Sed feugiat interdum mi sit amet faucibus. Nam leo lorem, sollicitudin sit amet tortor eget, iaculis finibus felis. Aliquam faucibus in urna non tempus. Proin pretium massa quis felis tempor dignissim ac nec eros. Aliquam eget tellus nec ligula dapibus interdum. Nunc egestas mollis elit et interdum. Morbi diam turpis, scelerisque nec aliquet et, hendrerit in dui. Nam nec lacus nec mi sollicitudin pretium eu sed purus. Nullam ac rutrum risus. Ut at mi eros. Aenean porta diam vel interdum ullamcorper. Nullam ac malesuada turpis. Vivamus nec enim posuere, pretium urna ultricies, commodo augue. Donec ullamcorper risus libero, ut convallis metus rutrum a. 

                </Col>
            </Row>

            <Row>
                <Col className="statistics">1 Viewer</Col>
                <Col className="series"> Hubies Blog </Col>
                <Col className="tags"> Godzilla, NYC, Destruction </Col>

            </Row>





        </Container>


    </MainLayout>
}