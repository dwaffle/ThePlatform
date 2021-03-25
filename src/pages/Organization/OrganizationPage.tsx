import React from 'react';
// import { Row, Col, Button, Form, Card, CardDeck } from "react-bootstrap";
//import Faq from '../components/OrganizationPage';
import MainLayout from '../../layouts/MainLayout';
import HorizontalOrganizationList from '../../components/organization/HorizontalOrganizationList';
import TrendingOrganization from '../../components/organization/TrendingOrganization';
// import './style.scss'

export default function OrganizationPage(props: {}) {
  return (
    <MainLayout>
      <HorizontalOrganizationList />
      <TrendingOrganization />
    </MainLayout>
  );
}
