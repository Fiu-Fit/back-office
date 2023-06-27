import { BadgeColor } from '@/components';
import { Role } from '@/interfaces';

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
