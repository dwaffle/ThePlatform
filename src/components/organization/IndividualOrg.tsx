import React, {useState, useEffect} from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import api from '../../api';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useParams } from 'react-router';
import {  useRecoilValue } from 'recoil'
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import {orgListState} from './OrgList'
//import Faq from '../components/OrganizationPage';
import './style.scss';
import { useHistory } from 'react-router-dom';
import user from '../../api/user';

interface IIndividuals{
  user_id:number,
  ord_id:number,
  user_userName:string
}

 const IndividualOrg = () => {
    const history = useHistory()
    const [org, setOrg] = useState<IOrganization>();
    const [users, setUsers] = useState<IIndividuals[]>()
    const params = useParams<{ id: string }>();
    const currentUser = window.localStorage.getItem('user_id')
    
    
    
    useEffect(() => {
          
          api.organization.get().then((response) => {
            setOrg(response.data?.find((_org:any) => _org.ord_id === Number(params.id)))
          }
        )
        const request = {
            id: params.id
        }
        api.orgs.post(request).then((response) => {
          const allUsers:IIndividuals[] = response.data
          const filteredUsers:IIndividuals[] = allUsers.filter(_id => _id.ord_id == Number(params.id))
          setUsers(filteredUsers)
        })
      }, [params.id]);

      function joinHandler(){
        const currentUser = window.localStorage.getItem('user_id')
        //Make sure the user isn't already in the org.
        if(currentUser && !(users?.find(_user => _user.user_id === Number(currentUser)))){
          const request = {
            ord_id: params.id,
            user_id: currentUser,
            addUser: true
          }
          api.orgs.patch(request)
          history.push(`/organization`) //Reload the page once the request has gone off.
        }
      }

      function leaveHandler(){
        const currentUser = window.localStorage.getItem('user_id')
        if(currentUser && (users?.find(_user => _user.user_id === Number(currentUser)))){
          const request ={
            ord_id: params.id,
            user_id: currentUser,
            addUser: false
          }
          api.orgs.patch(request)
          history.push(`/organization`)
        }
      }
    

    return(
        <>
              <Card bg="Light" style={{ width: '18rem', margin:'auto' }}>
                <Card.Header className="text-center p-3">
                  {org?.org_title}
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    {org?.org_desc}
                  </Card.Text>
                  <Card.Text>
                        Users: {users?.map(name => {return (<div className="user">{name.user_userName}</div>)})}
                    <br />
                  </Card.Text>
                  {!users?.find(user => user.user_id === Number(currentUser)) && (<Button className="joinbutton" id="joinbutton"  onClick={joinHandler}>Join!</Button>)}
                  {users?.find(user => user.user_id === Number(currentUser)) && (<Button className="leavebutton" id="leavebutton" onClick={leaveHandler}>Leave...</Button>)}
                </Card.Body>

               
               </Card>
        </>
    )
}

export default IndividualOrg