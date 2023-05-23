import colors from 'tailwindcss/colors';
import { BarChartData } from './interfaces';

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

export const barChartsData: BarChartData[] = [
  {
    datasets: [
      {
        url:   '/metrics/login',
        label: 'Inicios de sesion',
        color: colors.blue[500],
        data:  [],
      },
    ],
    labels: months,
  },
  {
    datasets: [
      {
        url:   '/metrics/register',
        label: 'Registros',
        color: colors.blue[500],
        data:  [],
      },
    ],
    labels: months,
  },
  {
    datasets: [
      {
        url:    '/metrics/login',
        label:  'Inicios de sesion sin identidad federada',
        params: {
          federatedIdentity: false,
        },
        color: colors.green[500],
        data:  [],
      },
      {
        url:    '/metrics/login',
        label:  'Inicios de sesion con identidad federada',
        params: {
          federatedIdentity: true,
        },
        color: colors.purple[500],
        data:  [],
      },
    ],
    labels: months,
  },
  {
    datasets: [
      {
        url:    '/metrics/register',
        label:  'Registros sin identidad federada',
        params: {
          federatedIdentity: false,
        },
        color: colors.green[500],
        data:  [],
      },
      {
        url:    '/metrics/register',
        label:  'Registros con identidad federada',
        params: {
          federatedIdentity: true,
        },
        color: colors.purple[500],
        data:  [],
      },
    ],
    labels: months,
  },
  {
    datasets: [
      {
        url:   '/metrics/password-reset',
        label: 'Reestablecimientos de contraseña',
        color: colors.yellow[500],
        data:  [],
      },
    ],
    labels: months,
  },
  {
    datasets: [
      {
        url:    '/metrics/register',
        label:  'Usuarios bloqueados',
        params: {
          blocked: true,
        },
        color: colors.red[500],
        data:  [],
      },
    ],
    labels: months,
  },
];
