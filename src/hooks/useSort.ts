import { useLocation } from 'react-router-dom';
import {
  ASC_DIRECTION,
  DESC_DIRECTION,
  parseSortParams,
  SEARCH_PARAM_SORT_PREFIX,
} from 'molecules/SortLabel';

export const useSort = <D>(data: D[]): D[] => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [name, direction] = parseSortParams(
    params.get(SEARCH_PARAM_SORT_PREFIX),
  );

  if (name && direction) {
    ((data as unknown) as Record<string, string | number>[]).sort((a, b) => {
      if (direction === ASC_DIRECTION) {
        if (a[name] < b[name]) {
          return -1;
        }
        if (a[name] > b[name]) {
          return 1;
        }
      }

      if (direction === DESC_DIRECTION) {
        if (a[name] > b[name]) {
          return -1;
        }
        if (a[name] < b[name]) {
          return 1;
        }
      }

      return 0;
    });
  }

  return data;
};
