import { useState, useEffect } from 'react';
import { fetchData } from '../services/dataService';
import type { DataType } from '../types/portfolio';

interface UsePortfolioDataResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

/**
 * Custom hook for fetching portfolio data with loading and error states.
 * Supports both local JSON and API data sources based on configuration.
 *
 * @param dataType - The type of data to fetch (e.g., 'personal', 'skills', 'projects')
 * @returns Object with data, loading state, error, and refetch function
 */
export function usePortfolioData<T>(dataType: DataType): UsePortfolioDataResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchData<T>(dataType);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataType]);

  const refetch = async () => {
    await loadData();
  };

  return { data, loading, error, refetch };
}

export default usePortfolioData;
