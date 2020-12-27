import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomePageScaffolding from "../components/homePage/HomePage";
import MainLayout from "../layouts/MainLayout";

export default function HomePage(props: {}) {
  return (
    <MainLayout>
      <HomePageScaffolding />
    </MainLayout>
  );
}
