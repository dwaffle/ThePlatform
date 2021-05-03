import MainLayout from '../../../layouts/MainLayout';
import './style.scss';
import { Container } from 'react-bootstrap';
import unnamed from '../../../data/icon/unnamed.jpg';
import { DummySeriesCard } from './dummyCard/dummyCard';
import { Row, Col, Button, Form } from 'react-bootstrap';

import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import api from '../../../api';
import user from '../../../api/user';

function CreateSeries() {
  let authorName: string = window.localStorage.getItem('username') || '';

  const history = useHistory();

  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState<string>('');
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
      <Row>
        <Col>
          <div className="Container">
            <Form className="FormLogin">
              <h1 className="LoginLabel">Create Series</h1>

              <Form.Group controlId="formOrgCreation">
                <Form.Label>Series Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Series Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {/* <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                /> */}

                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description of your series"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  onChange={changeCategory}
                  value={category}
                >
                   <option value="null"> Select Category.. </option>
                <option value="Tech"> Tech </option>
                <option value="Health"> Health </option>
                <option value="Beauty"> Beauty </option>
                <option value="Science"> Science </option>
                <option value="Reality"> Reality </option>
                <option value="Fiction"> Fiction </option>
                <option value="NonFiction"> Non-Fiction </option>
                <option value="Conspiracy"> Conspiracy </option>
                <option value="Nature"> Nature</option>
                <option value="Animals"> Animals </option>
                <option value="Humour"> Humour </option>
                <option value="Religion"> Religion </option>
                </Form.Control>
                <Button onClick={submitButton}>Submit</Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default CreateSeries;
