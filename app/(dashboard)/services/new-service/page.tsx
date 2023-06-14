import NewServiceForm from './NewServiceForm';
import { NewServiceDTO } from './interfaces';
import api from '@/api/serverSideAxiosConfig';

export default function CreateServicePage() {
  const createService = async (serviceData: NewServiceDTO) => {
    'use server';
    const { data: newService } = await api.post('/service-registry', {
      ...serviceData,
    });

    return newService;
  };

  return (
    <main className='min-w-full p-12'>
      <h1 className='text-4xl mb-4'>Crear servicio</h1>
      <div className='flex justify-center items-center'>
        <NewServiceForm createService={createService} />
      </div>
    </main>
  );
}
