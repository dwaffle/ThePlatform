import React, { MouseEvent } from 'react'
import { Badge, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import {IArticle} from './Articles'
import './style.scss'



export default function Article( props:IArticle ){

    return (
        <MainLayout>
            <a href="/newArticle">Create New</a>
        </MainLayout>
    );

}

// export default function Article( props:IArticle ){

//     function onClickRoute() {
//         return function reRoute(event:MouseEvent<HTMLButtonElement>)
//         {
//             const placeholder = 'do nothing'
//         }
//     }

//     return (
//         <MainLayout>
//         <Card>
//             <Card.Body>
//                 <Card.Title> <Link to={`/Articles/${props.title}`}></Link></Card.Title>
//                 <Card.Text>{props.description}</Card.Text>
//             </Card.Body>
//             <Card.Text>  <button onClick = {onClickRoute}> View Article </button> 
//             </Card.Text>

//             <Card.Footer>{props.price}, {props.category}, {props.tag}</Card.Footer>
//         </Card>
//         </MainLayout>
//     );

// }