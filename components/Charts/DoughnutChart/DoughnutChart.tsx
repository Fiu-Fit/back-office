'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutDataType } from './dataType';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  data,
  className,
  title,
}: {
  data: DoughnutDataType;
  className?: string;
  title?: string;
}) {

  for (const dataset of data.datasets) {
    dataset.borderColor = dataset.borderColor || dataset.backgroundColor;
  }

  return (
    <div className={`rounded-box bg-neutral p-5 ${className}`}>
      <Doughnut data={data} title={title} />
    </div>
  );
}
