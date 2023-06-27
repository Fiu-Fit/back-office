import { Verification } from '@fiu-fit/common';

export const requestListHeaders: {
  [key: string]: keyof Verification;
} = {
  ID:           'id',
  'ID Usuario': 'userId',
  Recibido:     'receivedAt',
  Estado:       'status',
};
