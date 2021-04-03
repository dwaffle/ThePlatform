import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import api from '../../api';
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

  useEffect(() => {
    api.organization.get().then((response) => {
      setAllOrgs(response.data)
    })
  }, [])
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
            {allOrgs?.map((data) => {
              
              return (<div>
                Organization: {data.org_title}
                </div>
              )
            })}
            </Carousel>
          </Col>
        </Row>
      </div>
    </>
  );
}
