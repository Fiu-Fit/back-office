import { User } from '@fiu-fit/common';

export const userCardFields = (user: User) => ({
  ID:       user.id,
  Email:    user.email,
  Nombre:   user.firstName,
  Apellido: user.lastName,
  Rol:      user.role,
});
