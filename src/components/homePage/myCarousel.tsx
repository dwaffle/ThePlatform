import { Carousel, Image } from 'react-bootstrap';
import article from '../../data/carousel/article.jpg';
import series from '../../data/carousel/series.jpg';
import organisation from '../../data/carousel/organisation.jpg';
import { useHistory } from 'react-router';

export default function MyCarousel() {
  const history = useHistory();

  function onClickGo(selected: any) {
    return history.push(`/${selected}`);
  }

  return (
    <>
      <div className="myCarsoul">
        <Carousel fade>
          <Carousel.Item
            onClick={() => {
              onClickGo('articles');
            }}
          >
            <Image
              src={article}
              //   src="holder.js/800x400?text=First slide&bg=373940"
              alt="article"
              thumbnail
            />
            <Carousel.Caption>
              <h3>Read articles</h3>
              <p>Try reading our free article collections.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            onClick={() => {
              onClickGo('series');
            }}
          >
            <Image
              src={series}
              //   src="holder.js/800x400?text=First slide&bg=373940"
              alt="series"
              thumbnail
            />
            <Carousel.Caption>
              <h3>Check our series</h3>
              <p>Enjoy our published series of articles.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item
            onClick={() => {
              onClickGo('organization');
            }}
          >
            <Image
              src={organisation}
              //   src="holder.js/800x400?text=First slide&bg=373940"
              alt="organisation"
              thumbnail
            />
            <Carousel.Caption>
              <h3>Find similar interests</h3>
              <p>Join your favorite organisations.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
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
