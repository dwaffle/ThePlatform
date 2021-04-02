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

interface IIndividuals{
  ord_id:number,
  user_userName:string
}

 const IndividualOrg = () => {
    const [org, setOrg] = useState<IOrganization>();
    const [users, setUsers] = useState<IIndividuals[]>()
    const params = useParams<{ id: string }>();
   
    
    
    
    useEffect(() => {
          api.organization.get().then((response) => {
            setOrg(response.data?.find((_org:any) => _org.ord_id === Number(params.id)))
          }
        )
        const request = {
            id: params.id
        }
        api.orgs.post(request).then((response) => {
          console.log(response.data)
          const allUsers:IIndividuals[] = response.data
          const filteredUsers:IIndividuals[] = allUsers.filter(_id => _id.ord_id == Number(params.id))
          console.log(filteredUsers)
          setUsers(filteredUsers)
        })
      }, [params.id]);
    

    return(
        <>
               <Card className="IndividualOrg">
                   <div className="OrgName">
                        Organization: {org?.org_title}
                    </div>
                    

               <div className ="UsersInOrg">
               Users: {users?.map(name => {return (<div className="user">{name.user_userName}</div>)})}
               </div>
               </Card>
        </>
    )
}

export default IndividualOrg