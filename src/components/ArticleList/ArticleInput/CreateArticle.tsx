import React, { useState, ChangeEvent } from "react";
import { Switch } from "react-router";
import Form from "react-bootstrap/Form";
import MainLayout from "../../../layouts/MainLayout";
import { useHistory } from "react-router-dom";
import api from "../../../api";
import "./style.scss";

export function CreateNewArticle() {
  const [type, setType] = useState<number>();
  const handleSelectChange = (event: any) => {
    const value = event.target.value;
    let valueAsNumber = parseInt(value);
    setType(valueAsNumber);
  };

  const [price, setPrice] = useState();
  const onChange = (e: any) => {
    setPrice(e.target.value);
  };

  const history = useHistory();
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [body, setBody] = useState<string>("");

  function onSubmit(e: any) {
    e.preventDefault();
    let objectToSend = {
      art_price: 0,
      artype_id: type,
      art_title: title,
      description: description,
      user_author: Number(localStorage.getItem("user_id")),
      art_body: body,
      art_image: image
    };
    api.article.post(objectToSend);
    alert("Success!");
    history.push("/");
    return;
  }

  let authorName: string = window.localStorage.getItem("username") || "";

  function onRadioClick(disabled: any) {
    disabled = false;
  }

  const [image, setImage] = useState<string>('');
  const fileHandler = (event:any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <MainLayout>
      <Switch>
        <Form method="Post">
          <Form.Row>
            <Form.Group className="FormRowSpacing">
              <Form.Control
                type="Title"
                placeholder="Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="FormRowSpacing">
              <Form.Control type="Author" readOnly value={authorName} />
            </Form.Group>
          </Form.Row>

          <Form.Row className="FormRowSpacing">
            <input type="file" accept="image/*" onChange={fileHandler} />
            
          </Form.Row>
          <div>
          <img src={image}></img>
          </div>

          <Form.Row className="FormRowSpacing">
            <Form.Control
              as="textarea"
              placeholder="Description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Row>

          <Form.Row className="FormRowSpacing">
            <Form.Control
              as="textarea"
              placeholder="Body"
              rows={15}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </Form.Row>

          <Form.Row>
            <Form.Group className="FormRowSpacing">
              <input
                type="radio"
                name="articleType"
                value="1"
                onChange={(event) => handleSelectChange(event)}
              />
              <label>All Members </label>
            </Form.Group>

            <Form.Group className="FormRowSpacing">
              <input
                type="radio"
                name="articleType"
                value="2"
                onChange={(event) => handleSelectChange(event)}
              />
              <label> Paid Members Only </label>
            </Form.Group>

            <Form.Group className="FormRowPrice">
              <input
                type="radio"
                name="articleType"
                value="3"
                onChange={(event) => handleSelectChange(event)}
              />
              Price
              <input
                type="text"
                pattern="[0-9]*"
                name="articleType"
                id="div1"
                value={price}
                onChange={onChange}
                // Currently having an issue where the price field is accesible when the radio button is not selected
                // hoping to make the radio button open and display the field for price input when selected to combat this and for aesthetics.
                // or an enable/disable function to make the price input work as intended when selected  
                disabled
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group>
              <select>
                <option selected>Category...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>

            <Form.Group>
              <select>
                <option selected>Series...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>
            <Form.Group>
              <input type="text" placeholder="Press enter to add tags" />
            </Form.Group>
          </Form.Row>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </Form>
      </Switch>
    </MainLayout>
  );
}
