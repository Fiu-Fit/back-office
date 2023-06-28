import colors from 'tailwindcss/colors';
import { FilterableChartData } from '../interfaces/interfaces';
import { BarDataset } from '@/components';

const months = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio ',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export const barChartsData: Array<FilterableChartData<BarDataset>> = [
  {
    datasetInfo: [
      {
        url:          'metrics/login',
        chartDataset: {
          label:           'Inicios de sesion',
          backgroundColor: colors.blue[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Inicios de sesion',
  },
  {
    datasetInfo: [
      {
        url:          'metrics/register',
        chartDataset: {
          label:           'Registros',
          backgroundColor: colors.blue[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Registros',
  },
  {
    datasetInfo: [
      {
        url:    'metrics/login',
        params: {
          federatedIdentity: false,
        },
        chartDataset: {
          label:           'Inicios de sesion sin identidad federada',
          backgroundColor: colors.green[500],
          data:            [],
        },
      },
      {
        url:    'metrics/login',
        params: {
          federatedIdentity: true,
        },
        chartDataset: {
          label:           'Inicios de sesion con identidad federada',
          backgroundColor: colors.purple[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Inicios de sesion separados por identidad federada',
  },
  {
    datasetInfo: [
      {
        url:    'metrics/register',
        params: {
          federatedIdentity: false,
        },
        chartDataset: {
          label:           'Registros sin identidad federada',
          backgroundColor: colors.green[500],
          data:            [],
        },
      },
      {
        url:    'metrics/register',
        params: {
          federatedIdentity: true,
        },
        chartDataset: {
          label:           'Registros con identidad federada',
          backgroundColor: colors.purple[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Registros separados por identidad federada',
  },
  {
    datasetInfo: [
      {
        url:          'metrics/password-reset',
        chartDataset: {
          label:           'Reestablecimientos de contraseña',
          backgroundColor: colors.yellow[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Reestablecimientos de contraseña',
  },
  {
    datasetInfo: [
      {
        url:    'metrics/register',
        params: {
          blocked: true,
        },
        chartDataset: {
          label:           'Usuarios bloqueados',
          backgroundColor: colors.red[500],
          data:            [],
        },
      },
    ],
    labels: months,
    title:  'Usuarios bloqueados',
  },
];
