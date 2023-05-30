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
    <div className='rounded-box bg-neutral p-5 flex flex-col gap-4'>
      <div className='flex justify-between'>
        {chartData?.filters &&
          chartData.filters.map(filter => (
            <Picker
              key={filter.name}
              label={filter.label}
              options={Object.keys(filter.options)}
              onChange={value => setFilter(filter.name, filter.options[value])}
            />
          ))}
      </div>
      <LoadingWrapper loading={isLoading}>
        {chartData && (
          <DoughnutChart
            data={{
              labels:   chartData.labels,
              datasets: chartData.datasetInfo.map(dataset => ({
                label: dataset.chartDataset.label,
                data:  Object.values(dataset.chartDataset.data),
                backgroundColor:
                  dataset.chartDataset.backgroundColor || colors.blue[500],
              })),
            }}
            className='h-96 flex justify-center bg-transparent p-0'
          />
        )}
      </LoadingWrapper>
    </div>
  );
}
