import { Page, Verification } from '@fiu-fit/common';
import RequestTable from './RequestsTable';
import api from '@/api/serverSideAxiosConfig';

async function getVerificationRequests(): Promise<Page<Verification>> {
  const { data: page } = await api.get<Page<Verification>>('/verifications');

  return page;
}
export default async function RequestsPage() {
  const page = await getVerificationRequests();

  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Solicitudes de verificación</h1>
      <RequestTable data={page.rows} />
    </div>
  );
}
