import { Carousel, Image } from "react-bootstrap";
import article from '../../data/carousel/article.jpg'
import series from '../../data/carousel/series.jpg'
import organisation from '../../data/carousel/organisation.jpg'

export default function MyCarousel (){

   
    return (<>

        <div className = "myCarsoul">
            <Carousel fade>
                <Carousel.Item>
                    <Image 
                   
                    src={article}
                    //   src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    thumbnail
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                   
                    src={series}
                    //   src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    thumbnail
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image 
                   
                    src={organisation}
                    //   src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                    thumbnail
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
      </>);



}


// <Carousel fade>
// <Carousel.Item>
// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src={article} />
// <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//     Some quick example text to build on the card title and make up the bulk of
//     the card's content.
//     </Card.Text>
//     {/* <Button variant="primary">Go somewhere</Button> */}
// </Card.Body>
// </Card>