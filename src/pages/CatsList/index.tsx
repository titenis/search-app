import React, { FC } from 'react';
import { IWithCatBreedsProps, withCatBreeds } from 'hocs/withCatBreeds';
import { usePagination } from 'hooks/usePagination';
import { ICatBreed } from 'api/types';
import { useSort } from 'hooks/useSort';
import { useSearch } from 'hooks/useSearch';
import { BreedsTable } from 'organisms/BreedsTable';

type SearchableBreed = Pick<ICatBreed, 'name' | 'origin' | 'temperament'>;
type SortableBreed = SearchableBreed;

const CatsList: FC<IWithCatBreedsProps> = ({ catBreeds }) => {
  const searchedBreeds = useSearch<SearchableBreed>(catBreeds, [
    'name',
    'origin',
    'temperament',
  ]);
  const sortedBreeds = useSort<SortableBreed>(searchedBreeds as ICatBreed[]);
  const paginatedBreeds = usePagination<ICatBreed>(sortedBreeds as ICatBreed[]);

  return (
    <BreedsTable breeds={paginatedBreeds} totalCount={sortedBreeds.length} />
  );
};

export default withCatBreeds(CatsList);
