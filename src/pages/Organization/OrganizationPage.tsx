import MainLayout from '../../layouts/MainLayout';
import HorizontalOrganizationList from '../../components/organization/HorizontalOrganizationList';

export default function OrganizationPage(props: {}) {
  return (
    <MainLayout>
      <HorizontalOrganizationList />
    </MainLayout>
  );
}
