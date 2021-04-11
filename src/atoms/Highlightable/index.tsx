import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchValue } from 'molecules/Search';
import Highlighter from 'react-highlight-words';

export const Highlightable: FC = ({ children }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchValue = getSearchValue(params);

  return (
    <Highlighter
      searchWords={[searchValue ?? '']}
      autoEscape={true}
      textToHighlight={`${children}`}
    />
  );
};
