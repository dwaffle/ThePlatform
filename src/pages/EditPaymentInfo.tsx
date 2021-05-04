import React from 'react';
import EditPaymentPage from '../components/PaymentPage/Payment';
import MainLayout from '../layouts/MainLayout';

export default function ProfilePage(props: {}) {
  return (
    <MainLayout>
      <EditPaymentPage />
    </MainLayout>
  );
}
