import MainLayout from '../../../layouts/MainLayout';
import './style.scss';
import { Container } from 'react-bootstrap';
import unnamed from '../../../data/icon/unnamed.jpg';
import { DummySeriesCard } from './dummyCard/dummyCard';
import { Form, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useState} from 'react';
import api from '../../../api';

function CreateSeries() {
  let authorName: string = window.localStorage.getItem('username') || '';

  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState();

  function submitButton(e: any) {
    e.preventDefault();
    let newSeriesCreation = {
      series_title: title,
      series_desc: desc,
    };
    console.log(newSeriesCreation);
    //Send object.
    api.series.post(newSeriesCreation);
    alert('Success!');
    history.push('/');
    return;
  }

  return (
    <MainLayout>
      <Container className="csMBG">
        <div className="nsBG">
          <DummySeriesCard />
          <DummySeriesCard />
          {/*
           *
           *
           * */}
          <Form.Group>
            <Card className="sCards">
              <Card.Img
                variant="top"
                width="100%"
                src={unnamed}
                className="card-image-top"
              ></Card.Img>
              <Card.Body className="scBody">
                <Card.Title className="scTitle">
                  <Form.Control
                    type="Title"
                    placeholder="Series Title"
                    // value={title}
                  ></Form.Control>
                </Card.Title>
                <Card.Text>
                  <Form.Control
                    className="scTextArea"
                    as="textarea"
                    placeholder="Summary"
                  ></Form.Control>
                </Card.Text>
                <Card.Footer className="scFooter">{authorName}</Card.Footer>
              </Card.Body>
            </Card>
          </Form.Group>

          {/*
           *
           *
           * */}
          <DummySeriesCard />
          <DummySeriesCard />
        </div>
      </Container>
    </MainLayout>
  );
}

export default CreateSeries;
