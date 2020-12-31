import React from "react";
import Admin from "../components/admin/AdminPage";
import MainLayout from "../layouts/MainLayout";

export default function AdminPage(props: {}) {
  return (
    <MainLayout>
      <Admin />
    </MainLayout>
  );
}
