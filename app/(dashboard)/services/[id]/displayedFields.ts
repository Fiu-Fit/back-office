import { Service } from '@/interfaces/service';

export const serviceCardFields = (service: Service) => ({
  ID:          service.id,
  Nombre:      service.name,
  Descripcion: service.description,
  'API Key':   service.apiKey,
});
