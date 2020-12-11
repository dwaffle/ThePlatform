import React, { useEffect, useState } from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import {IArticle} from './Articles'
import './style.scss'



export default function Article( props:IArticle ){

    return (
        <Card>
            <Card.Body>
                <Card.Title> </Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>

            <Card.Footer>
            </Card.Footer>
        </Card>
    );

}