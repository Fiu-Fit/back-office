import { statusColor, statusTranslation } from '../statusUtils';
import { serviceCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import { BlockHeader } from '@/components';
import DetailCard from '@/components/DetailCard/DetailCard';
import { Service, ServiceStatus } from '@/interfaces';

async function getService(id: number): Promise<Service> {
  const { data: service } = await api.get<Service>(`/service-registry/${id}`);

  return service;
}

export default async function ServiceDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  const service = await getService(id);
  const blocked = service.status === ServiceStatus.Blocked;

  const toggleBlockService = async (): Promise<Service> => {
    'use server';
    const status = blocked ? 'Available' : 'Blocked';
    const { data: blockedService } = await api.put<Service>(`/service-registry/${id}`, {
      status
    });

    return blockedService;
  };

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full'>
        <BlockHeader
          title={service.name}
          blocked={blocked}
          toggleBlock={toggleBlockService}
          blockStatus={statusTranslation(service.status)}
          blockColor={statusColor(service.status)}
          blockMessage='¿Estas seguro que quieres bloquear este servicio?'
          unblockMessage='¿Estas seguro que quieres desbloquear este servicio?'
        />
        <DetailCard
          title='Detalle de usuario'
          fields={serviceCardFields(service)}
        />
      </div>
    </div>
  );
}
