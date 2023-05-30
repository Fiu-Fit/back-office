import axios from 'axios';
import { useEffect, useState } from 'react';
import { FilterableChartData } from '../app/(dashboard)/user-metrics/interfaces';

interface FilterParams {
  [key: string]: string;
}

export default function useFilteredData<T>(data: FilterableChartData<any>) {
  const [filters, setFilters] = useState<FilterParams>();
  const [chartData, setChartData] = useState<FilterableChartData<T>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getBarData = async () => {
      setIsLoading(true);
      for (const datasetInfo of data.datasetInfo) {
        const response = await axios.get('/api/metrics', {
          params: {
            ...filters,
            url: datasetInfo.url,
            ...datasetInfo.params,
          },
        });
        datasetInfo.chartDataset.data = response.data;
      }
      setIsLoading(false);
      setChartData(data);
    };

    getBarData();
  }, [filters]);

  const setFilter = (key: string, value:string) => {
    setFilters(previousFilters => {
      return {
        ...previousFilters,
        [key]: value,
      };
    });
  };

  return { chartData, isLoading, setFilter };
}
