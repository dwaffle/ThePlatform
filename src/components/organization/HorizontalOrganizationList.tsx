import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import api from '../../api';

import { useHistory } from 'react-router-dom';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import "react-multi-carousel/lib/styles.css";
//import Faq from '../components/OrganizationPage';
import './style.scss';


// export interface IOrganization {
//     name: string;
//     description: string;
// }



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000 , min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function HorizontalOrganizationList(props: {}) {

  const [allOrgs, setAllOrgs] = useState<IOrganization[]>()
  const history = useHistory()
  useEffect(() => {
    api.organization.get().then((response) => {
      setAllOrgs(response.data)
    })
  }, [])

  function onClickHandler(id:number){
    return function(){
      history.push(`/IndividualOrganizationPage/${id}`)
    }
  }

  return (
    <>
      {' '}
      <div className="horizontal-organization-list">
        {/* Search | Filters */}
        <Form>
          <Row>
            <Col>
              <Form.Control as="select" defaultValue="Choose..." value="">
                <option value="">Show All...</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control placeholder="Search Product Name..." value="" />
            </Col>
            <Col></Col>
            {/* Create a new organization */}
            <Col>
              {' '}
              <Button href="/NewOrganizationPage">Create New</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="search-filter">
        <Row>
          <Col>
            <Carousel responsive={responsive}>
            {allOrgs ? allOrgs.map((data) => {
              
              return (<Card bg="Light" style={{ width: '18rem' }}>
              <Card.Header className="text-center p-3">
                Organization {data.org_title}
              </Card.Header>
              <Card.Body>
                {/* <Card.Title>Primary Card Title</Card.Title> */}
                <Card.Text>
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content. 
                  <br />
                  <Button className="view-org-button" onClick={onClickHandler(data.ord_id)}>View Org</Button>
                </Card.Text>
              </Card.Body>
            </Card>
              )
            }) : <div></div>
          }
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
}
