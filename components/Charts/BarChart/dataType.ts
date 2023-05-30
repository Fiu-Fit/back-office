export interface BarData {
  labels: string[];
  datasets: BarDataset[];
}

export interface BarDataset {
  label: string;
  data: number[];
  backgroundColor: string;
}
