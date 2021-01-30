import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import EditProfilePage from "../components/profile/EditProfilePage";
import MainLayout from "../layouts/MainLayout";

export default function ProfilePage(props: {}) {
  return (
    <MainLayout>
      <EditProfilePage />
    </MainLayout>
  );
}
