import { Service } from '@/interfaces/service';

export const serviceListHeaders: {
  [key: string]: keyof Service;
} = {
  ID:          'id',
  Nombre:      'name',
  Descripcion: 'description',
  'API Key':   'apiKey',
  Estado:      'status',
};
