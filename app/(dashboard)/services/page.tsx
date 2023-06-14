import { mdiPlusCircleOutline } from '@mdi/js';
import ServiceTable from './ServiceTable';
import api from '@/api/serverSideAxiosConfig';
import ControlHeader from '@/components/ControlHeader';
import { Service } from '@/interfaces/service';

async function getServices(): Promise<Service[]> {
  const { data } = await api.get<Service[]>('/service-registry');

  return data;
}
export default async function ServicesPage() {
  const data = await getServices();

  return (
    <div className='m-12'>
      <ControlHeader
        title='Servicios'
        buttonText='Agregar servicio'
        icon={mdiPlusCircleOutline}
        createHref='/services/new-service'
      />
      <ServiceTable data={data} />
    </div>
  );
}
