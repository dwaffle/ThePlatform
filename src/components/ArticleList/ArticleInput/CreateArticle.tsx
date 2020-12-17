import React, { useState, ChangeEvent } from 'react';
import { Route, Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import MainLayout from '../../../layouts/MainLayout';
import './style.scss'
// import {articleListState, articleCreationComp} from './ArticleCreationComp'


export function CreateNewArticle (){

    // function onSubmit(){
    //     article( description:string ) => create( article );
    //     setArticle("");
    // }

    const [ submit, setSubmit ] = useState();
    // const [ title, setTitle ] = useState<string>();
    // const [ author, setAuthor ] = useState<string>();
    // const [ description, setDescription ] = useState<string>();
    // const [ body, setBody ] = useState<string>();

    const [ article, setArticle ] = useState()

    // function newTitle( event:ChangeEvent<HTMLTextAreaElement> ){
    //     setTitle(event.target.value);
    // }
    // function newAuthor( event:ChangeEvent<HTMLTextAreaElement> ){
    //     setAuthor(event.target.value);
    // }
    // function newDesc( event:ChangeEvent<HTMLTextAreaElement> ){
    //     setDescription(event.target.value);
    // }
    // function newBody( event:ChangeEvent<HTMLTextAreaElement> ){
    //     setBody(event.target.value);
    // }





    return <MainLayout>
        <Switch>
        <Form method="Post">
            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Title" placeholder="Article Title" value={article} />
                </Form.Group>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Author" placeholder="This User" value={article}/>
                </Form.Group>
            </Form.Row>
            
    

            <Form.Row className="FormRowSpacing">
                <Form.Control as="textarea" placeholder= "Description" rows={3} value={article}/>
            </Form.Row>

            <Form.Row className="FormRowSpacing">
                <Form.Control as="textarea" placeholder= "Body" rows={15} value={article} />
            </Form.Row>

            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <input type="radio" name="articleType" value="Yes" checked/>
                    <label>All Members </label>
                </Form.Group>

                <Form.Group className="FormRowSpacing">
                    <input type="radio" name="articleType" value="No"/>
                    <label> Paid Members Only </label>
                </Form.Group>

                <Form.Group className="FormRowPrice">
                    <input type="radio" name="articleType" value="Price" /> Price <input type="text" name="articleType" />
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
            <button type="submit">Submit</button>
        </Form>
    </Switch>
    
    </MainLayout>
    
}
