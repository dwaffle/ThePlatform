import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import api from '../../api';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import { orgListState } from './OrgList';
//import Faq from '../components/OrganizationPage';
import './style.scss';
import { useHistory } from 'react-router-dom';


interface IIndividuals {
  user_id: number;
  ord_id: number;
  user_userName: string;
  user_role: number;
}

const IndividualOrg = () => {
  const history = useHistory();
  const [org, setOrg] = useState<IOrganization>();
  const [users, setUsers] = useState<IIndividuals[]>();
  const [thisUser, setThisUser] = useState<IIndividuals>();
  const params = useParams<{ id: string }>();
  const currentUser = window.localStorage.getItem('user_id');

  useEffect(() => {
    api.organization.get().then((response) => {
      setOrg(
        response.data?.find((_org: any) => _org.ord_id === Number(params.id)),
      );
    });
    const request = {
      id: params.id,
    };
    api.orgs.post(request).then((response) => {
      const allUsers: IIndividuals[] = response.data;
      const filteredUsers: IIndividuals[] = allUsers.filter(
        (_id) => _id.ord_id == Number(params.id),
      );
      setThisUser(
        filteredUsers.find((_id) => _id.user_id === Number(currentUser)),
      );
      setUsers(filteredUsers);
    });
  }, [params.id]);

  function joinHandler() {
    const currentUser = window.localStorage.getItem('user_id');
    //Make sure the user isn't already in the org.
    if (
      currentUser &&
      !users?.find((_user) => _user.user_id === Number(currentUser))
    ) {
      const request = {
        ord_id: params.id,
        user_id: currentUser,
        user_role: 3,
        addUser: true,
      };
      api.orgs.patch(request);
      history.push(`/organization`); //Reload the page once the request has gone off.
    }
  }

  function leaveHandler() {
    const currentUser = window.localStorage.getItem('user_id');
    if (
      currentUser &&
      users?.find((_user) => _user.user_id === Number(currentUser))
    ) {
      const request = {
        ord_id: params.id,
        user_id: currentUser,
        addUser: false,
      };
      api.orgs.patch(request);
      history.push(`/organization`);
    }
  }

  function removeUser(id: number) {
    return () => {
      if (users?.find((_user) => _user.user_id === id)) {
        const request = {
          ord_id: params.id,
          user_id: id,
          addUser: false
        }
        api.orgs.patch(request)
        alert("Success")
        history.push("/organization")
      }
    };
  }

  function showRemoveButton(id: number) {
    return (
      <Button
        variant="warning"
        className="removeButton"
        onClick={removeUser(id)}
      >
        Remove User
      </Button>
    );
  }

  function disbandOrgHandler(org: any | undefined) {
    return () => {
      if (org != undefined) {
        api.orgs.delete(org);
      }
      history.push('/organization');
    };
  }


function promoteUser(id:number){
  return () => {
    const request = {
      ord_id: params.id,
      user_id: id,
      user_role: 2
    }
    api.organization.patch(request);
    history.push("/organization");
  }
}

function demoteUser(id:number){
  return ()  => {
    const request = {
      ord_id: params.id,
      user_id: id,
      user_role: 3
    }
    api.organization.patch(request);
    history.push("/organization");
  }
}

  function displayRole(role: number) {
    switch (role) {
      case 1:
        return "Creator";
      case 2:
        return "Admin";
      case 3:
        return "Member";
    }
  }

  return (
    <>
      <Card bg="Light" style={{ width: '25rem', margin: 'auto' }}>
        <Card.Header className="text-center p-3">{org?.org_title}</Card.Header>
        <Card.Body>
          <Card.Text>{org?.org_desc}</Card.Text>
          <Card.Text>
            Users:{' '}
            {users?.map((name) => {
              return <div className="user">{name.user_userName} 
              {(name.user_id !== Number(currentUser) && (thisUser?.user_role === 1) && (name.user_role === 3)) && <Button variant="info" onClick={promoteUser(name.user_id)}>Promote User</Button>}
              {(name.user_id !== Number(currentUser) && (thisUser?.user_role === 1) && (name.user_role === 2)) && <Button variant="info" onClick={demoteUser(name.user_id)}>Demote User</Button>}
              {(name.user_id !== Number(currentUser) && (thisUser?.user_role === 1 || thisUser?.user_role === 2)&& name.user_role > thisUser?.user_role) && <div className="removeButton">{showRemoveButton(name.user_id)}</div>}
              
              <div className="role">{displayRole(name.user_role)}</div> </div>;
            })}
            <br />
          </Card.Text>
          {!users?.find((user) => user.user_id === Number(currentUser)) && (
            <Button
              className="joinbutton"
              id="joinbutton"
              onClick={joinHandler}
            >
              Join!
            </Button>
          )}
          {users?.find(
            (user) =>
              user.user_id === Number(currentUser) && user.user_role !== 1,
          ) && (
            <Button
              className="leavebutton"
              id="leavebutton"
              onClick={leaveHandler}
            >
              Leave...
            </Button>
          )}
          {users?.find(
            (user) =>
              user.user_id === Number(currentUser) && user.user_role === 1,
          ) && (
            <Button
              className="disband"
              id="disband"
              onClick={disbandOrgHandler(org?.ord_id)}
              variant="danger"
            >
              Disband Org
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default IndividualOrg;
