import React, { useState } from 'react';
import { Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import MainLayout from '../../../layouts/MainLayout';
import {useHistory} from 'react-router-dom';
import api from '../../../api';
import './style.scss';


export function CreateNewArticle (){

    
    const history = useHistory();
    const [ price, setPrice ] = useState<number>()
    const [ type, setType ] = useState()
    const [ title, setTitle ] = useState<string>();
    const [ author, setAuthor ] = useState<string>();
    const [ description, setDescription ] = useState<string>();
    const [ body, setBody ] = useState<string>();

    function onSubmit(){
        if(!title || !author || !description|| !body || !type || !price)
        {
        alert ("Failed to Submit")
          return;  
        } 
        const objectToSend = {

            price:price,
            type: type,
            art_title:title,
            description:description,
            user_author:author,
            art_body:body,
        }
        api.article.post(objectToSend);
        history.push('/article');
        return;
    }

    // function articleType () {
    //     if (!allMembers )
    // }

    return <MainLayout>
        <Switch>
        <Form method="Post">
            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Title" placeholder="Article Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Author" placeholder="This User" value={author} onChange={(e)=>setAuthor(e.target.value)}/>
                </Form.Group>
            </Form.Row>
            
    

            <Form.Row className="FormRowSpacing">
                <Form.Control as="textarea" placeholder= "Description" rows={3} value={description} onChange={(e)=>setDescription(e.target.value)} />
            </Form.Row>

            <Form.Row className="FormRowSpacing">
                <Form.Control as="textarea" placeholder= "Body" rows={15} value={body} onChange={(e)=>setBody(e.target.value)}/>
            </Form.Row>

            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <input type="radio" name="articleType" value={type} onChange={(e)=>setType} checked/>
                    <label>All Members </label>
                </Form.Group>

                <Form.Group className="FormRowSpacing">
                    <input type="radio" name="articleType" value={type} onChange={(e)=>setType} />
                    <label> Paid Members Only </label>
                </Form.Group>

                <Form.Group className="FormRowPrice">
                    <input type="radio" name="articleType" value="Price" /> Price <input type="number" name="articleType" value={price} onChange={(e)=>setPrice} />
                </Form.Group>
            </Form.Row>
            

            <Form.Row>
                <Form.Group>
                    <select>
                        <option selected>Categories..</option>
                        <option value="1">Rant</option>
                        <option value="2">News</option>
                        <option value="3">Fiction</option>
                    </select>
                </Form.Group>

                <Form.Group>
                    <select>
                        <option selected>Series...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </Form.Group>
                <Form.Group>
                <input type="text" placeholder="Press enter to add tags" />
                </Form.Group>
            </Form.Row>
            <button type="submit" onClick={onSubmit} >Submit</button>
        </Form>
    </Switch>
    
    </MainLayout>
    
}
