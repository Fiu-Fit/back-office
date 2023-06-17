import { BadgeColor } from '@/components';

export const blockColor = (blocked: boolean): BadgeColor => {
  return blocked ? 'error' : 'success';
};

export const blockTranslation = (blocked: boolean): string => {
  return blocked ? 'Bloqueado' : 'No bloqueado';
};

export const federatedIdentityColor = (federatedIdentity: boolean): BadgeColor => {
  return federatedIdentity ? 'secondary' : 'primary';
};

export const federatedIdentityTranslation = (federatedIdentity: boolean): string => {
  return federatedIdentity ? 'Federado' : 'No federado';
};
