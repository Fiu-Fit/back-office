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
import { BarData } from './dataType';

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
  redraw,
  color,
}: {
  data: BarData;
  className?: string;
  redraw?: boolean;
  color?: string;
}) {
  const options = {
    color:      color,
    responsive: true,
    scales:     {
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
