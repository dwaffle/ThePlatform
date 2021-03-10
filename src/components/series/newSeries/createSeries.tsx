import MainLayout from '../../../layouts/MainLayout';
import './style.scss';
import { Container } from 'react-bootstrap';
import unnamed from '../../../data/icon/unnamed.jpg';
import { DummySeriesCard } from './dummyCard/dummyCard';
import { Form, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../../../api';
import user from '../../../api/user';

function CreateSeries() {
  let authorName: string = window.localStorage.getItem('username') || '';

  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState<string>('');

  const changeCategory = (e: any) => {
    setCategory(e.target.value);
  };

  function submitButton(e: any) {
    e.preventDefault();
    let newSeriesCreation = {
      series_owner: Number(localStorage.getItem('user_id')),
      series_title: title,
      series_desc: desc,
      series_category: category,
    };
    console.log(newSeriesCreation);
    //Send object.
    api.series.post(newSeriesCreation);
    // alert('Success!');
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></Form.Control>
                </Card.Title>
                <Card.Text>
                  <Form.Control
                    className="scTextArea"
                    as="textarea"
                    placeholder="Summary"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></Form.Control>
                </Card.Text>
                <Form.Group>
                  <Form.Control
                    as="select"
                    onChange={changeCategory}
                    value={category}
                  >
                    <option>Categories</option>
                    <option value="Tech"> Tech </option>
                    <option value="Health"> Health </option>
                    <option value="Sci-Fi"> Sci-Fi </option>
                    <option value="Science"> Science </option>
                    <option value="Beauty"> Beauty </option>
                  </Form.Control>
                </Form.Group>
                <Card.Footer className="scFooter">{authorName}</Card.Footer>
              </Card.Body>
            </Card>
            <button type="submit" onClick={submitButton}>
              {' '}
              Test{' '}
            </button>
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
