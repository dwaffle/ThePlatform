import { useEffect, useState } from 'react';
import { Row, Col, Table, Button, CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IUserAdmin } from '../../../services/crud-server/src/models/user';
import api from '../../api';



export default function MemberSide(props: {}) {

  const history = useHistory()
  const [members,setMembers] = useState<IUserAdmin[]>([])
  const [selectedMember, setSelectedMember ] = useState<IUserAdmin>()

  function  onClick (selected:IUserAdmin) {
      
    return function(){

          setSelectedMember(selected);          
    }
  };

   //  api put request
   function putMember(statusMember:number) {
    let updatedMember = {
      user_status: statusMember,
      user_id: selectedMember?.user_id,
    };
    
    api.user.put(updatedMember);
    history.push('/admin');
    return;
  }


  useEffect(() => {
    
    api.user.get().then((response) => {
      setMembers(response.data)
    })

  }, [])



  let approvedOrRejected = (e: any) => {
      
    if (selectedMember && e.target.value != selectedMember.user_status ){
      e.preventDefault();
      putMember(e.target.value);
      window.location.reload(false);
    }

    else if ( e.target.value == selectedMember?.user_status && selectedMember?.user_status == 0 ){
      alert( "pls, chose another member, you cant band a member twice.")
    }

    else if ( e.target.value == selectedMember?.user_status && selectedMember?.user_status == 1 ){
      alert( "pls, chose another member, he/she Approved member.")
    }

    else {
      alert( "pls, you didnt select any memeber, chose one to go ")
    }
    

  };

  return (
    <>
       <Row>
        <Col>
          <h3>Member List List</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <th>Full Name</th>
              <th>Date of Profile</th>
              <th>User Name</th>
              <th>Status</th>
            </thead>
            <tbody>
            {members?.map((member) => {
              
              return (<tr 
              
                key={member.user_id}
                defaultValue={member.user_id}
                onClick={onClick(member)}
  
              >
                <td > { member.user_firstName } { member.user_lastName }</td>
                <td>{ member.user_creation_date }</td>
                <td>{ member.user_userName }</td>
                <td>{ member.user_status == 1? "active":"band" }</td>
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
                name="statusMember"
                onClick={approvedOrRejected} >
                Ban Member
              </Button>

              <Button
                variant="primary"
                block
                value="1"
                name="statusMember"
                onClick={approvedOrRejected} >
                Approved Member
              </Button>
        </Col>

        <Col xs={8}>
            <CardDeck>
              <Card bg="Light" style={{ width: '18rem' }}>
                <Card.Header>Selected Member </Card.Header>
                <Card.Body>
                  <Card.Title>{ selectedMember?.user_firstName } { selectedMember?.user_lastName } </Card.Title>
                  <Card.Text> User name: { selectedMember?.user_userName } </Card.Text>
                </Card.Body>
              </Card>
              </CardDeck>              
        </Col>
      </Row>
    </>
  );
}
