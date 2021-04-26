import React, { useEffect, useState } from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import api from '../../api';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import './style.scss';
import { useHistory } from 'react-router-dom';

//Moved to the Horizontal Organization Page to minimize database queries and improve performance.
export default function TrendingOrganization(props: {}) {

  const [allOrgs, setAllOrgs] = useState<IOrganization[]>()
  const [reverseOrgs, setReverseOrgs] = useState<IOrganization[]>()
  const history = useHistory()

  function onClickHandler(id:number){
    return function(){
      history.push(`/IndividualOrganizationPage/${id}`)
    }
  }

  return (
    <>
      <Row>
        <Col>
          <div className="trending-organization">
            <h3>Trending Organization</h3>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>organization</th>
                </tr>
              </thead>
              <tbody>
              {allOrgs ? allOrgs.map((data) => {
                  return (<tr onClick={onClickHandler(data.ord_id)}>
                  <td>{data.ord_id}</td>
                  <td>{data.org_title}</td>
                </tr>)
              }) : <tr><td>You must be logged in to view organizations</td></tr>} 
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <div className="trending-organization">
            <h3>Newest organizations</h3>
            <Table striped bordered hover variant="info">
              <thead>
                <tr>
                  <th>#</th>
                  <th>organization</th>
                </tr>
              </thead>
              <tbody>
                {reverseOrgs ? reverseOrgs.map((data) => {
                  return (<tr>
                  <td>{data.ord_id}</td>
                  <td>{data.org_title}</td>
                </tr>)
              }) : <tr><td>You must be logged in to view organizations</td></tr>}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}