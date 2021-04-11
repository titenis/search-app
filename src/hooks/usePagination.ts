import { useLocation } from 'react-router-dom';
import { getPage, getRowsPerPage } from 'molecules/Pagination';

export const usePagination = <D>(data: D[]): D[] => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const rowsPerPage = getRowsPerPage(params);
  const page = getPage(params);

  const offset = page * rowsPerPage;

  return data.slice(offset, offset + rowsPerPage);
};
