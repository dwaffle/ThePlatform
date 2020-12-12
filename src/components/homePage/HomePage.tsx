import React from 'react';
import { Row, Col, CardDeck, Card } from 'react-bootstrap';
//import Faq from '../components/OrganizationPage';
import './style.scss'

export default function HomePage( props:{} ){
 

    return <>
            
            <Row>
                <Col xs={8} > <div className = "HeadlineArticle"><h1> HeadlineArticle </h1></div> </Col>
                <Col ><div className = "MostPopularArticle"><h2> Most Popular Article  </h2></div></Col>
            </Row>

            <div>         
          <Row>
              <Col>                  
                <CardDeck>
                  <Card bg="Light"  style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">Organization Name</Card.Header>
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
                  <Card bg="Light"  style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">Organization Name</Card.Header>
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
                  <Card bg="Light"  style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">Organization Name</Card.Header>
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
                  <Card bg="Light"  style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">Organization Name</Card.Header>
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
        </div>
        
        
        
    </>;
}