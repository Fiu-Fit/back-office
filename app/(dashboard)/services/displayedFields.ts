import { Service } from '@/interfaces';

export const serviceListHeaders: {
  [key: string]: keyof Service;
} = {
  ID:          'id',
  Nombre:      'name',
  Descripcion: 'description',
  'API Key':   'apiKey',
  Estado:      'status',
};
