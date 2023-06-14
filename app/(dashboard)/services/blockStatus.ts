import { BadgeVariant } from '@/components/Table';

export const variant: {
  [key: string]: BadgeVariant;
} = {
  Available: 'success',
  Blocked:   'error',
};

export const statusTranslation = {
  Available: 'Disponible',
  Blocked:   'Bloqueado',
};
