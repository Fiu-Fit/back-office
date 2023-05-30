import { FilterableBarChart, FilterableDoughnutChart } from './FilterableCharts';
import { barChartsData, doughnutChartsData } from './chartData';

export default function UserMetricsPage() {
  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Metricas</h1>
      <div className='grid grid-cols-2 gap-6'>
        {barChartsData.map((barChartData, index) => (
          <FilterableBarChart key={index} data={barChartData} />
        ))}
        {doughnutChartsData.map((doughnutChartData, index) => (
          <FilterableDoughnutChart key={index} data={doughnutChartData} />
        ))}
      </div>
    </div>
  );
}
