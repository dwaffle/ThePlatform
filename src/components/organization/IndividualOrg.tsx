import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Form, Card, CardDeck } from 'react-bootstrap';
import api from '../../api';
import { IUser } from '../../../services/crud-server/src/models/user';
import { useParams } from 'react-router';
import { useRecoilValue } from 'recoil';
import { IOrganization } from '../../../services/crud-server/src/models/organization';
import { orgListState, UseOrganizationList } from './OrgList';
//import Faq from '../components/OrganizationPage';
import './style.scss';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';

const IndividualOrg = () => {
  
  // const organizationList = useRecoilValue<IOrganization[]>(orgListState)
  const { orgList, setOrgList } = UseOrganizationList();

  console.log(orgList);
  // console.log(organizationList)
  const params = useParams<{ id: string }>();

  const [org, setOrg] = useState<IOrganization>();

  useEffect(() => {
    setOrg(orgList.find((_org) => _org.org_title === params.id));
  }, [params.id]);
  console.log('org', org);

  return (
    <>
      <Card className="IndividualOrg">
        <div className="OrgName">Organization: {org?.org_title}</div>

        <div className="UsersInOrg">Users: getUsersInOrg will go here</div>
      </Card>
    </>
  );
};

export default IndividualOrg;
