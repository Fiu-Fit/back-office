import { BadgeColor } from '@/components';
import { RequestStatus } from '@/interfaces';

export const statusColor = (status: RequestStatus): BadgeColor => {
  const colors: {
    [key in RequestStatus]: BadgeColor;
  } = {
    [RequestStatus.Pending]:  'warning',
    [RequestStatus.Approved]: 'success',
    [RequestStatus.Declined]: 'error',
  };

  return colors[status];
};

export const statusTranslation = (status: RequestStatus): string => {
  const translation: {
    [key: string]: string;
  } = {
    [RequestStatus.Pending]:  'Pendiente',
    [RequestStatus.Approved]: 'Aprobada',
    [RequestStatus.Declined]: 'Rechazada',
  };

  return translation[status];
};

