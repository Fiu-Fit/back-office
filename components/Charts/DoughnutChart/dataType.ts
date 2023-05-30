export interface DoughnutData {
  labels: string[];
  datasets: DoughnutDataset[];
}

export interface DoughnutDataset {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor?: string[];
}
