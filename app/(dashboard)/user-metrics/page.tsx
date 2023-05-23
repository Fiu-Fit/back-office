import colors from 'daisyui/src/colors/themes';
import api from '@/api/serverSideAxiosConfig';
import { BarChart } from '@/components';

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

interface ChartData {
  url:    string;
  title:  string;
  labels: string[];
  data:   number[];
}

const chartsData = [
  {
    url:      '/metrics/login',
    title:    'Inicios de sesion',
    labels:   months,
    data:    [],
  },
  {
    url:      '/metrics/register',
    title:    'Registros',
    labels:   months,
    data:    [],
  },
  {
    url:      '/metrics/password-reset',
    title:    'Reestablecimientos de contraseña',
    labels:   months,
    data:    [],
  },
];

async function getData(charts: ChartData[]) {
  for (const chart of charts) {
    const { data } = await api.get(chart.url);
    chart.data = data;
  }

  return charts;
}

export default async function UserMetricsPage() {
  const data = await getData(chartsData);
  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Metrics</h1>
      <div className='grid grid-cols-2 gap-6'>
        {data.map((chartData, index) => (
            <BarChart
              title={chartData.title}
              key={index}
              data={{
                labels:   months,
                datasets: [
                  {
                    label:           'Inicios de sesion',
                    data:            chartData.data,
                    backgroundColor: colors['[data-theme=dark]'].primary,
                    borderColor:     'rgba(255, 99, 132, 0.2)',
                  },
                ],
              }}
            />
          ))}
      </div>
    </div>
  );
}
