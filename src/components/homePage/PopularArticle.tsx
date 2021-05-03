import { Media } from "react-bootstrap";

export default function PopularArticle (){


    return (<>

        <div className="HeadlineArticle">           
            <h1> Popular Article </h1>

        <div>
            <Media>
                <img
                width={90}
                height={90}
                className="align-self-start mr-3"
                src="https://picsum.photos/200/300?random=1"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis
                </p>
                </Media.Body>
            </Media>
        </div>

        <div>
            <Media>
                <img
                width={90}
                height={90}
                className="align-self-start mr-3"
                src="https://picsum.photos/200/300?random=2"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis
                </p>
                </Media.Body>
            </Media>
        </div>

        <div>
            <Media>
                <img
                width={90}
                height={90}
                className="align-self-start mr-3"
                src="https://picsum.photos/200/300?random=3"
                alt="Generic placeholder"
                />
                <Media.Body>
                <h5>Media Heading</h5>
                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis
                </p>
                </Media.Body>
            </Media>
        </div>

           
        </div>


    </>);

}