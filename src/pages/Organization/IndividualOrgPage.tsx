import React from 'react';
// import { Row, Col, Button, Form, Card, CardDeck } from "react-bootstrap";
//import Faq from '../components/OrganizationPage';
import MainLayout from '../../layouts/MainLayout';
import HorizontalOrganizationList from '../../components/organization/HorizontalOrganizationList';
import TrendingOrganization from '../../components/organization/TrendingOrganization';
import NewOrganizationForm from '../../components/organization/NewOrganization';
import IndividualOrganizationPage from '../../components/organization/IndividualOrg';
// import './style.scss'

export default function IndividualOrgPage(props: {}) {
  return (
    <MainLayout>
      <IndividualOrganizationPage />
    </MainLayout>
  );
}
