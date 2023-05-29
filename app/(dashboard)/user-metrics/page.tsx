import FilterableBarChart from './FilterableBarChart';
import { barChartsData } from './barChartsData';

export default function UserMetricsPage() {
  return (
    <div className='m-12'>
      <h1 className='text-4xl mb-4'>Metrics</h1>
      <div className='grid grid-cols-2 gap-6'>
        {barChartsData.map((barChartData, index) => (
          <FilterableBarChart key={index} data={barChartData} />
        ))}
      </div>
    </div>
  );
}
