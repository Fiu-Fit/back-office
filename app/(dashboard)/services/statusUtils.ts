import { BadgeColor } from '@/components';

export const statusColor = (status: string): BadgeColor => {
  const statusEnum: {
    [key: string]: BadgeColor;
  } = {
    Available: 'success',
    Blocked:   'error',
  };

  return statusEnum[status as keyof typeof statusEnum] || 'warning';
};

export const statusTranslation = (status: string): string => {
  const translation = {
    Available: 'Disponible',
    Blocked:   'Bloqueado',
  };

  return translation[status as keyof typeof translation] || 'Desconocido';
};
