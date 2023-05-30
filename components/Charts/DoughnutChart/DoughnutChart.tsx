'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutData } from './dataType';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  data,
  className,
  title,
  redraw,
}: {
  data: DoughnutData;
  className?: string;
  title?: string;
  redraw?: boolean;
}) {
  for (const dataset of data.datasets) {
    dataset.borderColor = dataset.borderColor || dataset.backgroundColor;
  }

  return (
    <div className={`rounded-box bg-neutral p-5 ${className}`}>
      <Doughnut data={data} title={title} redraw={redraw} />
    </div>
  );
}
