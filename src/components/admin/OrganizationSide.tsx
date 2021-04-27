import React, { useEffect, useState, useRef } from 'react';
import { Row, Col, CardDeck, Card, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
// import { orgList } from '../organization/OrgList'
import api from '../../api';


export default function OrganizationSide(props: {}) {

  const history = useHistory()
  // cost get_orgList = orgList
  const [orgs, setOrgs] = useState<IOrganization[]>([])

  const [selectedOrg, setSelectedOrg] = useState<IOrganization>()

  
    function  onClick (selected:IOrganization) {
      
      return function(){

            // let selected = orgs.filter((org) => org.ord_id == id)
            setSelectedOrg(selected);          

      }
  };


  //  api put request
  function putOrg(status:number) {
    let updatedOrg = {
      org_status: status,
      ord_id: selectedOrg?.ord_id,
    };
    
    api.organization.put(updatedOrg);
    history.push('/admin');
    return;
  }
 

  useEffect(() => {
    
    api.organization.get().then((response) => {
      setOrgs(response.data)
    })

  }, [])

  let approvedOrRejected = (e: any) => {
    
    if (selectedOrg && e.target.value != selectedOrg.org_status ){
      e.preventDefault();
      putOrg(e.target.value);
      window.location.reload(false);
    }

    else if ( e.target.value == selectedOrg?.org_status && selectedOrg?.org_status == 0 ){
      alert( "pls, chose another item, you cant band it again.")
    }

    else if ( e.target.value == selectedOrg?.org_status && selectedOrg?.org_status == 1 ){
      alert( "pls, chose another item, its Approved organisation")
    }

    else {
      alert( "pls, you didnt select any item, chose one to go ")
    }
    

  };

  return (
    <>
      <Row>
        <Col>
          <h3>organization List</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <th>Title</th>
              <th>description</th>
              <th>Price</th>
              <th>Status</th>
            </thead>
            <tbody>
            {orgs?.map((org) => {
              
              return (<tr 
              
                key={org.ord_id}
                defaultValue={org.ord_id}
                onClick={onClick(org)}
  
              >
                <td > { org.org_title }</td>
                <td>{ org.org_desc }</td>
                <td>{ org.org_price }</td>
                <td>{ org.org_status == 1? "active":"band" }</td>
              </tr>);
            })}  
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
              <Button
                variant="primary"
                block
                value="0"
                name="status"
                onClick={approvedOrRejected} >
                Band Organisation
              </Button>

              <Button
                variant="primary"
                block
                value="1"
                name="status"
                onClick={approvedOrRejected} >
                Approved Organisation
              </Button>
        </Col>

        <Col xs={8}>

            <CardDeck>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header>Selected Organistion </Card.Header>
                <Card.Body>
                  <Card.Title>{selectedOrg?.org_title } </Card.Title>
                  <Card.Text>{selectedOrg?.org_desc } </Card.Text>
                </Card.Body>
              </Card>
              </CardDeck>              
        </Col>
      </Row>
    </>
  );
}
