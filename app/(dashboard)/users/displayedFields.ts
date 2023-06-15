import { User } from '@fiu-fit/common';

export const userListHeaders: {
  [key: string]: keyof User;
} = {
  ID:                   'id',
  Nombre:               'firstName',
  Apellido:             'lastName',
  Email:                'email',
  Rol:                  'role',
  Bloqueado:            'blocked',
  'Identidad Federada': 'federatedIdentity',
};
