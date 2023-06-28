import { UserDisplay } from './interfaces';

export const userListHeaders: {
  [key: string]: keyof UserDisplay;
} = {
  ID:                   'id',
  Nombre:               'firstName',
  Apellido:             'lastName',
  Email:                'email',
  Rol:                  'role',
  Bloqueado:            'blocked',
  'Identidad Federada': 'federatedIdentity',
  Verificado:           'verification',
};
