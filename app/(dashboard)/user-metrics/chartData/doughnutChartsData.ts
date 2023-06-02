import { FilterableChartData } from '../interfaces';
import { DoughnutDataset } from '@/components';

const userTypeLabels = ['Atletas', 'Entrenadores', 'Administradores'];

export const doughnutChartsData: Array<FilterableChartData<DoughnutDataset>> = [
  {
    labels:  userTypeLabels,
    filters: [
      {
        label:   'Usuarios bloqueados',
        name:    'blocked',
        options: {
          'Mostrar todos':         '',
          'Mostrar no bloqueados': false,
          'Mostrar bloqueados':    true,
        },
      },
      {
        label:   'Identidad federada',
        name:    'federatedIdentity',
        options: {
          'Mostrar todos':                       '',
          'Mostrar solo sin identidad federada': false,
          'Mostrar solo con identidad federada': true,
        },
      },
    ],
    datasetInfo: [
      {
        url:          'metrics/users',
        chartDataset: {
          label:           'Usuarios',
          backgroundColor: ['#10B981', '#3B82F6', '#EF4444'],
          data:            [],
        },
      },
    ],
  },
];
