import { useEffect, useState } from 'react';
import { Row, Col, Table, Button, CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IUser } from '../../../services/crud-server/src/models/user';
import api from '../../api';

export default function MemberSide(props: {}) {
  const history = useHistory();
  const [members, setMembers] = useState<IUser[]>([]);
  const [selectedMember, setSelectedMember] = useState<IUser>();

  function onClick(selected: IUser) {
    return function () {
      setSelectedMember(selected);
    };
  }

  useEffect(() => {
    api.user.get().then((response) => {
      setMembers(response.data);
    });
  }, []);

  let approvedOrRejected = (e: any) => {
    const status = e.target.value;

    if (selectedMember && status != selectedMember.user_status) {
      e.preventDefault();
      const otherMembers = members.filter(
        (_member) => _member.user_id != selectedMember.user_id,
      );
      selectedMember.user_status = status;
      setMembers([...otherMembers, selectedMember]);
      history.push('/admin');
    } else if (
      status == selectedMember?.user_status &&
      selectedMember?.user_status == 0
    ) {
      alert('This User is already Banned.');
    } else if (
      status == selectedMember?.user_status &&
      selectedMember?.user_status == 1
    ) {
      alert('This User is not Banned.');
    } else {
      alert("You didn't select a member, choose one to proceed");
    }
  };

  return (
    <>
      <Row>
        <Col>
          <h3>Member List </h3>
          <Table striped bordered hover>
            <thead>
              <th>User Name</th>
              <th>Date of Profile</th>
              <th>Full Name</th>
              <th>Type</th>
              <th> Status </th>
            </thead>
            <tbody>
              {members?.map((member) => {
                return member.user_type != 1 ? (
                  <tr
                    className="adminTable"
                    key={member.user_id}
                    defaultValue={member.user_id}
                    onClick={onClick(member)}
                  >
                    <td>{member.user_userName}</td>
                    <td>{member.user_creation_date.slice(0, 10)}</td>
                    <td>
                      {' '}
                      {member.user_firstName} {member.user_lastName}
                    </td>
                    <td>{member.code}</td>
                    <td>{member.user_status == 1 ? '  active' : 'inactive'}</td>
                  </tr>
                ) : (
                  <div></div>
                );
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
            onClick={approvedOrRejected}
          >
            Deactivate Member
          </Button>

          <Button
            variant="primary"
            block
            value="1"
            name="statusMember"
            onClick={approvedOrRejected}
          >
            Activate Member
          </Button>
        </Col>

        <Col xs={8}>
          <CardDeck>
            <Card bg="Light" style={{ width: '18rem' }}>
              <Card.Header>Selected Member </Card.Header>
              <Card.Body>
                <Card.Title>
                  {selectedMember?.user_firstName}{' '}
                  {selectedMember?.user_lastName}{' '}
                </Card.Title>
                <Card.Text>
                  {' '}
                  Username: {selectedMember?.user_userName}{' '}
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </>
  );
}
