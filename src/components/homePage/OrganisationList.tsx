import { Card, CardDeck } from "react-bootstrap";

export default function OrganisationList (){

    return(<>

        <div className = "orgDiv">
        <div>
                <CardDeck>
                    <Card bg="Light" style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">
                        Organization Name
                    </Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Primary Card Title</Card.Title> */}
                        <Card.Text>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                        <br />
                        <a href=""> See more </a>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card bg="Light" style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">
                        Organization Name
                    </Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Primary Card Title</Card.Title> */}
                        <Card.Text>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                        <br />
                        <a href=""> See more </a>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card bg="Light" style={{ width: '18rem' }}>
                    <Card.Header className="text-center p-3">
                        Organization Name
                    </Card.Header>
                    <Card.Body>
                        {/* <Card.Title>Primary Card Title</Card.Title> */}
                        <Card.Text>
                        Some quick example text to build on the card title and make
                        up the bulk of the card's content.
                        <br />
                        <a href=""> See more </a>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        </div>

    </>);

}