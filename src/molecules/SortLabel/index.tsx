import TableSortLabel, {
  TableSortLabelProps,
} from '@material-ui/core/TableSortLabel';
import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { changeSearchParams } from 'utils/changeSearchParams';

interface ISortLabelProps extends Partial<TableSortLabelProps> {
  name: string;
}

export const SEARCH_PARAM_SORT_KEY = 'sort';
export const ASC_DIRECTION = 'asc';
export const DESC_DIRECTION = 'desc';

export const parseSortParams = (sortValue: string | null): string[] =>
  sortValue?.split('.') ?? [];

export const SortLabel: FC<ISortLabelProps> = ({ name, ...rest }) => {
  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const [currentName, currentDirection] = parseSortParams(
    params.get(SEARCH_PARAM_SORT_KEY),
  );

  const handleClick = () => {
    const changedParams = changeSearchParams(
      params,
      SEARCH_PARAM_SORT_KEY,
      `${name}.${
        currentDirection === ASC_DIRECTION ? DESC_DIRECTION : ASC_DIRECTION
      }`,
    );

    history.push({ search: changedParams.toString() });
  };

  return (
    <TableSortLabel
      active={currentName === name}
      direction={currentDirection}
      onClick={handleClick}
      {...rest}
    />
  );
};
