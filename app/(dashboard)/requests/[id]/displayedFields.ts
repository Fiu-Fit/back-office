import { Verification } from '@fiu-fit/common';

export const verificationCardFields = (verificationRequest: Verification) => ({
  ID:           verificationRequest.id,
  'ID Usuario': verificationRequest.userId,
  Recibido:     verificationRequest.receivedAt,
});
