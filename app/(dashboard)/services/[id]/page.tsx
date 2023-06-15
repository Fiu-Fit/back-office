import BlockHeader from '../BlockHeader';
import { statusTranslation, variant } from '../blockStatus';
import { serviceCardFields } from './displayedFields';
import api from '@/api/serverSideAxiosConfig';
import DetailCard from '@/components/DetailCard';
import { Service } from '@/interfaces/service';

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

  const blockService = async (): Promise<Service> => {
    'use server';
    const { data: blockedService } = await api.put<Service>(`/service-registry/${id}`, {
      status: 'Blocked',
    });

    return blockedService;
  };

  const unblockService = async (): Promise<Service> => {
    'use server';
    const { data: blockedService } = await api.put<Service>(`/service-registry/${id}`, {
      status: 'Available',
    });

    return blockedService;
  };

  return (
    <div className='w-full h-full'>
      <div className='p-12 w-full'>
        <BlockHeader
          title={service.name}
          blocked={service.status === 'Blocked'}
          onBlock={blockService}
          onUnblock={unblockService}
          blockStatus={statusTranslation[service.status] || 'Desconocido'}
          blockVariant={variant[service.status] || 'warning'}
        />
        <DetailCard
          title='Detalle de usuario'
          fields={serviceCardFields(service)}
        />
      </div>
    </div>
  );
}
