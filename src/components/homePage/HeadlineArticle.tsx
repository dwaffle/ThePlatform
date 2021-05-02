import { Button, Card, CardDeck, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";


export default function HeadlineArticle(props: {}){

   
   
    return ( <>

        
        <div className="HeadlineArticle">
             <h1> HeadlineArticle </h1>


            <Row>
                <Col>
                <div>
                    <Card  className = "border border-primary rounded" style={{ width: '18rem' }}>
            
                    <Card.Body>
                        <Card.Title>Article Title</Card.Title>
                        <Card.Text>
                        Article description :Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="outline-primary " >See More</Button>
                    </Card.Body>
                    </Card>
                </div>

                </Col>
            </Row>
            
            
            
        </div>

    </>);
}
