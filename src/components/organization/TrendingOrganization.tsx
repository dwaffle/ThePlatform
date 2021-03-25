import React from 'react';
import { Row, Col, Table } from 'react-bootstrap';
import './style.scss';

export default function TrendingOrganization(props: {}) {
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
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <div className="trending-organization">
            <h3>Newest organization?</h3>
            <Table striped bordered hover variant="info">
              <thead>
                <tr>
                  <th>#</th>
                  <th>organization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mark</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Jacob</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Jacob</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </>
  );
}
