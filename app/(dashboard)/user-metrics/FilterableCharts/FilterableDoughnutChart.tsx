'use client';
import colors from 'tailwindcss/colors';
import { FilterableChartData } from '../interfaces';
import LoadingWrapper from './LoadingWrapper';
import { DoughnutChart, DoughnutDataset, Picker } from '@/components';
import { useFilteredData } from '@/hooks';

type DoughnutDatasetCountFields = Omit<DoughnutDataset, 'data'> & {
  data: {
    Athlete: number;
    Trainer: number;
    Admin: number;
  };
};

export default function FilterableDoughnutChart({
  data,
}: {
  data: FilterableChartData<DoughnutDataset>;
}) {
  const { chartData, isLoading, setFilter } =
    useFilteredData<DoughnutDatasetCountFields>(data);

  return (
    <div className='rounded-box bg-base-300 p-5 flex flex-col gap-4'>
      <h1 className='text-2xl font-bold text-start'>{data.title}</h1>
      <div className='flex justify-between'>
        {chartData?.filters &&
          chartData.filters.map(({ name, label, options }) => (
            <Picker
              key={name}
              label={label}
              options={Object.keys(options)}
              onChange={value => setFilter(name, options[value])}
            />
          ))}
      </div>
      <LoadingWrapper loading={isLoading}>
        {chartData && (
          <DoughnutChart
            data={{
              labels:   chartData.labels,
              datasets: chartData.datasetInfo.map(({ chartDataset }) => ({
                label: chartDataset.label,
                data:  Object.values(chartDataset.data),
                backgroundColor:
                  chartDataset.backgroundColor || colors.blue[500],
              })),
            }}
            className='h-96 flex flex-col items-center justify-center bg-transparent p-0'
          />
        )}
      </LoadingWrapper>
    </div>
  );
}
