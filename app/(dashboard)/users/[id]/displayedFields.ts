import { User } from '@fiu-fit/common';

export const userCardFields = (user: User) => ({
  ID:                   user.id,
  Email:                user.email,
  Nombre:               user.firstName,
  Apellido:             user.lastName,
  Rol:                  user.role,
  'Peso (kg)':          user.bodyWeight,
  'Identidad Federada': user.federatedIdentity ? 'Federado' : 'No federado',
});

export const workoutListHeaders = {
  ID:            '_id',
  Nombre:        'name',
  Categoría:     'categoryString',
  Atletas:       'athleteNumber',
  'ID Autor':    'authorId',
};
