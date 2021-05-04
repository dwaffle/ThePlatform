// import React from 'react';
// import { Col, Container, Row } from "react-bootstrap";
import ProfilePageScaffolding from '../components/profile/ProfilePage';
import MainLayout from '../layouts/MainLayout';

export default function ProfilePage(props: {}) {
  return (
    <MainLayout>
      <ProfilePageScaffolding />
    </MainLayout>
  );
}
