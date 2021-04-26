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

  
  // function to select and set an article from the pending list
  function  ShowOnClick (id: number) {
    // console.log("++++++++" + e.target.index)
  let selected:any = orgs.filter((org) => org.ord_id == id)
     setSelectedOrg(selected); 
  };


  // const showSelectedOrg = () => {
   
  // };

   //api patch request
  // function patchOrg() {
  //   let updatedArticle = {
  //     org_status: Number(selectedOrg),
  //     ord_id: selectedOrg?.ord_id,
  //   };
  //   console.log('patch', updatedArticle);
  //   api.article.patch(updatedArticle);
  //   history.push('/editor');
  //   return;
  // }



  useEffect(() => {
  
    api.organization.get().then((response) => {
      setOrgs(response.data)
    })

  }, [])

  let approvedOrRejected = (e: any) => {
    setOrgs(e.target.value);
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
                // onClick={ShowOnClick(org.ord_id)}
  
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
                Reject Article
              </Button>
              <Button
                variant="primary"
                block
                value="1"
                name="status"
                onClick={approvedOrRejected} >
                Approve Article
              </Button>
            </Col>

            <Col xs={8}>

            {/* {selectedOrg.map((selected) => { */}
            {orgs.map((selected) => {
             
             return (

              <CardDeck>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header>Selected Organistion </Card.Header>
                <Card.Body>
                  <Card.Title>{selected.org_title } </Card.Title>
                  <Card.Text>{selected.org_desc } </Card.Text>
                </Card.Body>
              </Card>
              </CardDeck>              
             )


            })}
           
        </Col>
      </Row>
    </>
  );
}
