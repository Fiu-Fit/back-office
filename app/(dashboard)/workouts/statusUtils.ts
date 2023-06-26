import { BadgeColor } from '@/components';

export const blockColor = (blocked: boolean): BadgeColor => {
  return blocked ? 'error' : 'success';
};

export const blockTranslation = (blocked: boolean): string => {
  return blocked ? 'Bloqueado' : 'No bloqueado';
};
