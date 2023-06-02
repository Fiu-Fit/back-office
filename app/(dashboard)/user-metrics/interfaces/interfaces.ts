export interface FilterableDataset<T> {
  url: string;
  params?: {
    federatedIdentity?: boolean;
    blocked?: boolean;
  };
  chartDataset: T;
}

interface FilterInfo {
  label: string;
  name: string;
  options: {
    [key: string]: any;
  };
}

export interface FilterableChartData<T> {
  datasetInfo: Array<FilterableDataset<T>>;
  labels: string[];
  filters?: FilterInfo[];
}

