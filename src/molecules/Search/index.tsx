import React, { FC, ChangeEventHandler } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase, styled } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { changeSearchParams } from 'utils/changeSearchParams';
import { SEARCH_PARAM_PAGE_KEY } from 'molecules/Pagination';

const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: fade(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: fade(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  width: '100%',
}));

const DEFAULT_SEARCH_VALUE = '';
export const SEARCH_PARAM_SEARCH_KEY = 'search';
export const getSearchValue = (params: URLSearchParams): string | null =>
  params.get(SEARCH_PARAM_SEARCH_KEY);

export const Search: FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(search);
  const searchValue = getSearchValue(params);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    params.delete(SEARCH_PARAM_PAGE_KEY);

    const changedParams = changeSearchParams(
      params,
      SEARCH_PARAM_SEARCH_KEY,
      value,
    );

    history.push({ search: changedParams.toString() });
  };
  return (
    <SearchWrapper>
      <StyledSearchIcon />
      <StyledInput
        onChange={handleChange}
        value={searchValue ?? DEFAULT_SEARCH_VALUE}
        placeholder="Search???"
      />
    </SearchWrapper>
  );
};
