import colors from 'tailwindcss/colors';
import { barChartsData } from './barChartsData';
import { BarChartData } from './interfaces';
import api from '@/api/serverSideAxiosConfig';
import { BarChart } from '@/components';

async function getBarData(barChartData: BarChartData[]) {
  for (const chart of barChartData) {
    for (const dataset of chart.datasets) {
      const { data } = await api.get(dataset.url, {
        params: dataset.params,
      });

      dataset.data = data;
    }
  }

  return barChartData;
}

export default async function UserMetricsPage() {
  const barData = await getBarData(barChartsData);
  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Metrics</h1>
      <div className='grid grid-cols-2 gap-6'>
        {barData.map((chartData, index) => (
          <BarChart
            key={index}
            data={{
              labels:   chartData.labels,
              datasets: chartData.datasets.map(dataset => ({
                label:           dataset.label,
                data:            dataset.data,
                backgroundColor: dataset.color || colors.blue[500],
              })),
            }}
          />
        ))}
      </div>
    </div>
  );
}
