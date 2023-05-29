'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
import colors from 'tailwindcss/colors';
import { BarChartData } from './interfaces';
import { BarChart, Picker } from '@/components';

const FLOOR_YEAR = 2000;

const currentYear = new Date().getFullYear();
const options: string[] = [];
for (let year = currentYear; year >= FLOOR_YEAR; year--) {
  options.push(year as unknown as string);
}

export default function FilterableBarChart({ data }: { data: BarChartData }) {
  const [year, setYear] = useState<string>(currentYear as unknown as string);
  const [barChartData, setBarChartData] = useState<BarChartData>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getBarData = async () => {
      setIsLoading(true);
      for (const dataset of data.datasets) {
        const response = await axios.get('/api/metrics', {
          params: {
            year,
            url:    dataset.url,
            ...dataset.params,
          },
        });
        dataset.data = response.data;

      }
      setIsLoading(false);
      setBarChartData(data);
    };

    getBarData();
  }, [year]);

  return (
    <div className='rounded-box bg-neutral p-5 flex flex-col gap-4'>
      <Picker placeholder='Elegí un año' options={options} onChange={setYear} />
      {isLoading ? (
        <div className='flex justify-center items-center h-64'>
          <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900' />
        </div>
      ) : (
        barChartData && (
          <BarChart
            className='bg-transparent p-0'
            data={{
              labels:   barChartData.labels,
              datasets: barChartData.datasets.map(dataset => ({
                label:           dataset.label,
                data:            dataset.data,
                backgroundColor: dataset.color || colors.blue[500],
              })),
            }}
            redraw
          />
        )
      )}
    </div>
  );
}
