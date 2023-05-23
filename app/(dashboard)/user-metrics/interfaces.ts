export interface Dataset {
  url: string;
  label: string;
  params?: {
    federatedIdentity?: boolean;
    blocked?: boolean;
  };
  color?: string;
  data: number[];
}

export interface BarChartData {
  datasets: Dataset[];
  labels: string[];
}
