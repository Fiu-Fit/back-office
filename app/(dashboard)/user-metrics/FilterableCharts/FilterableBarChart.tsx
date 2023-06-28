'use client';
import rangeRight from 'lodash/rangeRight';
import colors from 'tailwindcss/colors';
import { FilterableChartData } from '../interfaces';
import LoadingWrapper from './LoadingWrapper';
import { BarChart, BarDataset, Picker } from '@/components';
import { useFilteredData } from '@/hooks';

const FLOOR_YEAR = 2000;
const currentYear = new Date().getFullYear();
const options: string[] = rangeRight(FLOOR_YEAR, currentYear + 1).map(
  (year: number) => year.toString()
);

export default function FilterableBarChart({
  data,
}: {
  data: FilterableChartData<BarDataset>;
}) {
  const { chartData, isLoading, setFilter } = useFilteredData<BarDataset>(data);
  return (
    <div className='rounded-box bg-base-300 p-5 flex flex-col gap-4'>
      <h1 className='text-2xl font-bold text-start'>{data.title}</h1>
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
              datasets: chartData.datasetInfo.map(({ chartDataset }) => ({
                label: chartDataset.label,
                data:  chartDataset.data,
                backgroundColor:
                  chartDataset.backgroundColor || colors.blue[500],
                borderRadius: 5,
              })),
            }}
            redraw
          />
        )}
      </LoadingWrapper>
    </div>
  );
}
