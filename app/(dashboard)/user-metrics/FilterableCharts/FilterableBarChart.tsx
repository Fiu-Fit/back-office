'use client';
import colors from 'tailwindcss/colors';
import { FilterableChartData } from '../interfaces';
import LoadingWrapper from './LoadingWrapper';
import { BarChart, BarDataset, Picker } from '@/components';
import { useFilteredData } from '@/hooks';

const FLOOR_YEAR = 2000;

const currentYear = new Date().getFullYear();
const options: string[] = [];
for (let year = currentYear; year >= FLOOR_YEAR; year--) {
  options.push(year as unknown as string);
}

export default function FilterableBarChart({
  data,
}: {
  data: FilterableChartData<BarDataset>;
}) {
  const { chartData, isLoading, setFilter } = useFilteredData<BarDataset>(data);

  return (
    <div className='rounded-box bg-neutral p-5 flex flex-col gap-4'>
      <Picker
        placeholder='Elegí un año'
        options={options}
        onChange={year => {
          setFilter('year', year);
        }}
      />
      <LoadingWrapper loading={isLoading}>
        {chartData && (
          <BarChart
            className='bg-transparent p-0'
            data={{
              labels:   chartData.labels,
              datasets: chartData.datasetInfo.map(dataset => ({
                label: dataset.chartDataset.label,
                data:  dataset.chartDataset.data,
                backgroundColor:
                  dataset.chartDataset.backgroundColor || colors.blue[500],
              })),
            }}
            redraw
          />
        )}
      </LoadingWrapper>
    </div>
  );
}
