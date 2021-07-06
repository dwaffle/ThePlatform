import MainLayout from '../../layouts/MainLayout';
import NewOrganizationForm from '../../components/organization/NewOrganization';

export default function CreateOrganizationPage(props: {}) {
  return (
    <MainLayout>
      <NewOrganizationForm />
    </MainLayout>
  );
}
