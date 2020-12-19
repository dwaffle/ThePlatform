import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { useParams } from 'react-router';
import MainLayout from '../../layouts/MainLayout';
import {IArticle} from '../../../services/crud-server/src/models/article'
import {articleListState} from './Articles'
import './style.scss'
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

// export interface IArticle {
//   price: number,
//   author: number,
//   type: number,
//   description: string,
//   title: string,
//   body: string
// }


export default function Article( props:IArticle ){

  const params = useParams<{ id: string }>();
  const articleList = useRecoilValue<IArticle[]>(articleListState);
  const [ article, setArticle ] = useState<IArticle>();

  useEffect(() => {
    setArticle(articleList.find( _article => _article.title === params.id ));
  }, [params.id])

 
    return (
        <MainLayout>

            <div className="filter">
                <Form>
                <Row>
                    <Col>
                        <Form.Control as="select" defaultValue="Choose..." value="">
                            <option value="">Show All...</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Form.Control placeholder="Search Product Name..." value="" />
                    </Col>
                    <Col></Col>
                    {/* Create a new organization */}
                    <Col> <Button href="/newArticle">Create New</Button></Col>
                </Row>
                </Form>
            </div>

            <Row className="cardspacing">
              <Col>                  
                <CardDeck>
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader" >{props.title}</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader">These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader" >These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader">These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
             
                </CardDeck>   
              </Col>
            </Row>

            <Row className="cardspacing">
              <Col>                  
                <CardDeck>
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader" >These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader">These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader" >These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader">These will be sliders</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
             
                </CardDeck>   
              </Col>
            </Row>


            
            <Row>
              <Col>                  
                <CardDeck>
                  <Card className="cardStyle">
                    <Card.Header className="cardHeader" >Godzilla strikes again!</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                  <Card bg="Light"  style={{ width: '15rem' }}>
                    <Card.Header className="cardHeader">Adam Sandler defeats Godzilla</Card.Header>
                    <Card.Body>
                      {/* <Card.Title>Primary Card Title</Card.Title> */}
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content. 
                        <br/>
                        <a href=""> See more </a>
                      </Card.Text>
                    </Card.Body>
                  </Card> 
             
                </CardDeck>   
              </Col>
          </Row>

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