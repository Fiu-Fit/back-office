import { FilterableChartData } from '../interfaces';
import { DoughnutDataset } from '@/components';

export const doughnutChartsData: Array<FilterableChartData<DoughnutDataset>> = [
  {
    title:   'Usuarios separados por rol',
    labels:  ['Atletas', 'Entrenadores', 'Administradores'],
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
  {
    title:   'Entrenadores separados por verificación',
    labels:      ['Entrenadores no verificados', 'Entrenadores verificados'],
    filters: [
      {
        label:   'Entrenadores bloqueados',
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
        url:          'metrics/trainers',
        chartDataset: {
          label:           'Entrenadores',
          backgroundColor: ['#FFCA3A', '#A855F7'],
          data:            [],
        },
      },
    ],
  },
];
