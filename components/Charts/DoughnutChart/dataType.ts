export interface DoughnutDataType {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor?: string[];
  }>;
}
