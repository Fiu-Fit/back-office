'use client';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { BarDataType } from './dataType';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart({
  data,
  className,
  title,
  redraw,
}: {
  data: BarDataType;
  className?: string;
  title?: string;
  redraw?: boolean;
}) {
  const options = {
    color:      'white',
    responsive: true,
    plugins:    {
      title: {
        display: !!title,
        text:    title,
      },
    },

    scales: {
      x: {
        display: true,
        title:   {
          display: true,
          text:    'Mes',
        },
      },
      y: {
        display: true,
        title:   {
          display: true,
          text:    'Cantidad',
        },
        ticks: {
          precision: 0,
        },
      },
    },
  };

  return (
    <div className={`rounded-box bg-neutral p-5 ${className}`}>
      <Bar options={options} data={data} redraw={redraw}/>
    </div>
  );
}
