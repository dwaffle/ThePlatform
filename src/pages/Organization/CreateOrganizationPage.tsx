// import React from 'react';
// import { Row, Col, Button, Form, Card, CardDeck } from "react-bootstrap";
//import Faq from '../components/OrganizationPage';
import MainLayout from '../../layouts/MainLayout';
import NewOrganizationForm from '../../components/organization/NewOrganization';
// import './style.scss'

export default function CreateOrganizationPage(props: {}) {
  return (
    <MainLayout>
      <NewOrganizationForm />
    </MainLayout>
  );
}
