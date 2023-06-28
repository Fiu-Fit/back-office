import { Verification } from '@fiu-fit/common';
import { BadgeColor } from '@/components';
import { RequestStatus, Role } from '@/interfaces';

export const blockColor = (blocked: boolean): BadgeColor => {
  return blocked ? 'error' : 'success';
};

export const blockTranslation = (blocked: boolean): string => {
  return blocked ? 'Bloqueado' : 'No bloqueado';
};

export const federatedIdentityColor = (
  federatedIdentity: boolean
): BadgeColor => {
  return federatedIdentity ? 'secondary' : 'info';
};

export const federatedIdentityTranslation = (
  federatedIdentity: boolean
): string => {
  return federatedIdentity ? 'Federado' : 'No federado';
};

export const roleColor = (role: Role): BadgeColor => {
  const colors: {
    [key in Role]: BadgeColor;
  } = {
    Admin:   'accent',
    Trainer: 'secondary',
    Athlete: 'primary',
  };

  return colors[role] || 'warning';
};

export const roleTranslation = (role: Role): string => {
  const translation: {
    [key in Role]: string;
  } = {
    Admin:   'Administrador',
    Trainer: 'Entrenador',
    Athlete: 'Atleta',
  };

  return translation[role] || 'Desconocido';
};

export const verificationColor = (verification?: Verification): BadgeColor => {
  const colors: {
    [key in RequestStatus]: BadgeColor;
  } = {
    Pending:  'warning',
    Declined: 'error',
    Approved: 'success',
  };

  return verification ? colors[verification.status] : 'neutral';
};

export const verificationTranslation = (verification?: Verification): string => {
  const colors: {
    [key in RequestStatus]: string;
  } = {
    Pending:  'Pendiente',
    Declined: 'Rechazado',
    Approved: 'Verificado',
  };

  return verification ? colors[verification.status] : 'No verificado';
};
