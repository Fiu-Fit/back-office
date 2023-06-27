import { VerificationDisplay } from './interfaces';

export const requestListHeaders: {
  [key: string]: keyof VerificationDisplay;
} = {
  ID:           'id',
  'ID Usuario': 'userId',
  Recibido:     'receivedAtString',
  Estado:       'status',
};
