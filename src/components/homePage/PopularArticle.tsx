import { Media } from "react-bootstrap";

export default function PopularArticle (){


    return (<>

        <div className="HeadlineArticle">           
            <h1> Popular Article </h1>

        <div>
            <Media>
                <img
                width={64}
                height={64}
                className="align-self-start mr-3"
                src="https://picsum.photos/200/300?grayscale/64x64"
                alt="Generic placeholder"
                />
                <Media.Body>
                    <h5>Media Heading</h5>
                    <p>
                        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus.
                    </p>
                </Media.Body>
            </Media>
        </div>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="https://picsum.photos/200/300?grayscale/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      
      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="https://picsum.photos/200/300?grayscale/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      
      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

           
        </div>


    </>);

}