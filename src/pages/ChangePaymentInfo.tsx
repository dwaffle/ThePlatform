// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import ChangePaymentPage from '../components/PaymentPage/ChangePaymentPage';
import MainLayout from '../layouts/MainLayout';

export default function ChangePayment(props: {}) {
  return (
    <MainLayout>
      <ChangePaymentPage />
    </MainLayout>
  );
}
