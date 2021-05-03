import { Button, Card, CardDeck, Col, Container, Image, Jumbotron, Row } from "react-bootstrap";


export default function HeadlineArticle(props: {}){

   
   
    return ( <>

        
        <div className="HeadlineArticle">
            <h1> HeadlineArticle </h1>
          
            <div className = "divStyle">
                
                <div>
                    <p>
                        <img
                            width={90}
                            height={90}
                            className="imgStyle rounded-circle"
                            src="https://picsum.photos/200/300?random=4"
                            alt="Generic placeholder"
                            />
                        
                        <h2>Float Right</h2>
                        
                    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, 
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                        auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                        <br/><Button variant="outline-primary " >See More</Button>
                    </p>
                </div>

                <div>
                    <p>
                        <img
                            width={90}
                            height={90}
                            className="imgStyle rounded-circle"
                            src="https://picsum.photos/200/300?random=5"
                            alt="Generic placeholder"
                            />
                        
                        <h2>Float Right</h2>
                        
                    
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, 
                        nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget,
                        auctor vitae massa. Fusce luctus vestibulum augue ut aliquet.
                        <br/><Button variant="outline-primary " >See More</Button>
                    </p>
                </div>

            </div>

               
        </div>

    </>);
}
