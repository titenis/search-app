import { TablePagination, TablePaginationProps } from '@material-ui/core';
import React, { FC, MouseEvent, ChangeEventHandler } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

interface IPaginationProps extends Partial<TablePaginationProps> {
  count: number;
}

const SEARCH_PARAM_PAGE_KEY = 'page';
const SEARCH_PARAM_ROWS_PER_PAGE_KEY = 'rows_per_page';
const DEFAULT_PAGE = 0;
const DEFAULT_ROWS_PER_PAGE = 5;

export const changeSearchParams = (
  params: URLSearchParams,
  key: string,
  value?: string,
): URLSearchParams => {
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params;
};

export const getRowsPerPage = (params: URLSearchParams): number =>
  Number(params.get(SEARCH_PARAM_ROWS_PER_PAGE_KEY)) || DEFAULT_ROWS_PER_PAGE;

export const getPage = (params: URLSearchParams): number =>
  Number(params.get(SEARCH_PARAM_PAGE_KEY)) || DEFAULT_PAGE;

export const Pagination: FC<IPaginationProps> = ({ count, ...rest }) => {
  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const page = getPage(params);

  const handlePageChange = (
    _e: MouseEvent<HTMLButtonElement>,
    page: string,
  ) => {
    const changedParams = changeSearchParams(
      params,
      SEARCH_PARAM_PAGE_KEY,
      page,
    );

    history.push({ search: changedParams.toString() });
  };

  const handleRowsPerPageChange: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = ({ target: { value } }) => {
    params.delete(SEARCH_PARAM_PAGE_KEY);

    const changedParams = changeSearchParams(
      params,
      SEARCH_PARAM_ROWS_PER_PAGE_KEY,
      value,
    );

    history.push({ search: changedParams.toString() });
  };

  return (
    <TablePagination
      rowsPerPageOptions={[DEFAULT_ROWS_PER_PAGE, 10, 25]}
      component="div"
      count={count}
      rowsPerPage={getRowsPerPage(params)}
      page={page}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handleRowsPerPageChange}
      {...rest}
    />
  );
};
