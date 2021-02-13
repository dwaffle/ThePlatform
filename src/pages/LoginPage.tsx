import React from 'react';
import MainLayout from '../layouts/MainLayout';
import LoginForm from '../components/LoginPage/LoginForm';

export default function LoginPage(props: {}) {
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}
