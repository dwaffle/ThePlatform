import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import EditPaymentPage from '../components/PaymentPage/Payment';
import MainLayout from '../layouts/MainLayout';

export default function ProfilePage(props: {}) {
  return (
    <MainLayout>
      <EditPaymentPage />
    </MainLayout>
  );
}
