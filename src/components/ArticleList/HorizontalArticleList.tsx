import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import './style.scss'
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import { IArticle } from '../../../services/crud-server/src/models/article';
import api from '../../api';
import { Link } from 'react-router-dom';

export default function HorizontalArticles( props: { rows: number }){

  const [ article, setArticle ] = useState<IArticle[]>([]);

  useEffect(() => {
    getArticle();
  }, []);
  
  const getArticle = () => {
    api.article.get().then((response) => {
      const oneArticle = response.data;
      console.log(oneArticle)
      setArticle(oneArticle);
    }).catch(error => console.error(`Error: ${error}`))
  }

  
    return (
        <MainLayout>

          <Row className="CardFeatured">
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
          
          <div>
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
                    <Col> <Button  href="/newArticle">Create New</Button></Col>
                </Row>
                </Form>
          </div>

          <div className="viewArticles">
            {article.map (art =>
              <Card className="Card">

              <Card.Header className="CardHeader"> <Link to="/articles/:articleId">{art.art_title}</Link> 
              <div> Author:{art.user_author} </div>
              </Card.Header>
              

              <Card.Body className="CardBody">
                <Card.Text className="CardText">
                  {art.description}
                </Card.Text>
              </Card.Body>
              </Card>
            )}
          </div>
          
    

        </MainLayout>
    );

}


//   useEffect(() => {

//     const innerProductList = [ ...article ].filter(( article ) => {

//       let found = true;


       
//       return found;

//     });
//     const rows = [];

//     while( innerProductList.length && rows.length < (props.rows||1) ){
//         rows.push( innerProductList.splice(0,4));
//     }

//     setArticleRows( rows );

// }, [ props.rows ]);

