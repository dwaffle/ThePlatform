import React from 'react';
import { Route, Switch } from 'react-router';
import Form from 'react-bootstrap/Form'
import MainLayout from '../../../layouts/MainLayout';
import './style.scss'



export function createNewArticle (){

    // Tags will need to be changed eventually as <ReactTags>
    // Author needs to target the author
    // rating and rateme Needs to be visual placeholders? or removed


    return <MainLayout>
        <Switch>
        <Form>
            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Title" placeholder="Article Title" />
                </Form.Group>
                <Form.Group className="FormRowSpacing">
                    <Form.Control type="Author" placeholder="Author" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                    <label>All Members </label>
                </Form.Group>

                <Form.Group className="FormRowSpacing">
                    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                    <label> Paid Members Only </label>
                </Form.Group>

                
            </Form.Row>

            <Form.Row>
                <Form.Group>
                    <Form.Control type="price" placeholder="Price" />
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
                    <Form.Control type="Title" placeholder="Tags" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Control as="textarea" placeholder= "Description" rows={3} />
            </Form.Row>

            <Form.Row>
                <Form.Control as="textarea" placeholder= "Body" rows={15}  />
            </Form.Row>

            <Form.Row>
                <Form.Group className="FormRowSpacing">
                    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                    <label>All Members </label>
                </Form.Group>

                <Form.Group className="FormRowSpacing">
                    <input type="checkbox" id="blankCheckbox" value="option1" aria-label="..." />
                    <label> Paid Members Only </label>
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group>
                    <Form.Control type="price" placeholder="Price" />
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
                    <Form.Control type="Title" placeholder="Tags" />
                </Form.Group>
            </Form.Row>
            <button type="submit">Submit</button>
        </Form>
    </Switch>
    
    </MainLayout>
    
}
