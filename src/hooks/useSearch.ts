import { useLocation } from 'react-router-dom';
import { getSearchValue } from 'molecules/Search';

export const useSearch = <ST extends Record<string, string>>(
  data: ST[],
  fields: string[],
): ST[] => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchValue = getSearchValue(params);

  if (!searchValue) {
    return data;
  }

  return data.filter(item =>
    fields.some(
      field =>
        item[field].toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    ),
  );
};
