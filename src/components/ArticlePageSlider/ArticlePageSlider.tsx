import React from 'react';
import { Carousel } from 'react-bootstrap';
import './style.scss';

export default function FeatureSlider( props:{}){

    return <Carousel className="featureSlider" controls={false}>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>Test</h3>
                <p>Test</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>Test1</h3>
                <p>Test1</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Carousel.Caption>
                <h3>Test2</h3>
                <p>Test2</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>;

}