'use client';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { DoughnutData } from './dataType';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({
  data,
  className,
  redraw,
}: {
  data: DoughnutData;
  className?: string;
  redraw?: boolean;
}) {
  data.datasets.map(
    dataset =>
      (dataset.borderColor = dataset.borderColor || dataset.backgroundColor)
  );

  return (
    <div className={`rounded-box bg-neutral p-5 ${className}`}>
      <Doughnut data={data} redraw={redraw} />
    </div>
  );
}
