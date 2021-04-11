import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LinkIcon from '@material-ui/icons/Link';
import { IWithCatBreedsProps, withCatBreeds } from 'hocs/withCatBreeds';
import { Pagination } from 'molecules/Pagination';
import { usePagination } from 'hooks/usePagination';
import { ICatBreed } from 'api/types';
import { SortLabel } from 'molecules/SortLabel';
import { useSort } from 'hooks/useSort';
import { useSearch } from 'hooks/useSearch';
import { Highlightable } from 'atoms/Highlightable';

type SearchableBreed = Pick<ICatBreed, 'name' | 'origin' | 'temperament'>;
type SortableBreed = SearchableBreed;

const Component: FC<IWithCatBreedsProps> = ({ catBreeds }) => {
  const searchedBreeds = useSearch<SearchableBreed>(catBreeds, [
    'name',
    'origin',
    'temperament',
  ]);
  const sortedBreeds = useSort<SortableBreed>(searchedBreeds as ICatBreed[]);
  const paginatedBreeds = usePagination<ICatBreed>(sortedBreeds as ICatBreed[]);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <SortLabel name="name">Name</SortLabel>
              </TableCell>
              <TableCell align="right">
                <SortLabel name="origin">Origin</SortLabel>
              </TableCell>
              <TableCell align="right">Life span</TableCell>
              <TableCell align="right">
                <SortLabel name="temperament">Temperament</SortLabel>
              </TableCell>
              <TableCell align="right">Weight (kg)</TableCell>
              <TableCell align="right">Wiki</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBreeds.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Highlightable>{row.name}</Highlightable>
                </TableCell>
                <TableCell align="right">
                  <Highlightable>{row.origin}</Highlightable>
                </TableCell>
                <TableCell align="right">{row.life_span}</TableCell>
                <TableCell align="right">
                  <Highlightable>{row.temperament}</Highlightable>
                </TableCell>
                <TableCell align="right">{row.weight.metric}</TableCell>
                <TableCell align="right">
                  <a target="_blank" href={row.wikipedia_url} rel="noreferrer">
                    <LinkIcon />
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination count={sortedBreeds.length} />
    </Paper>
  );
};

export const CatsList = withCatBreeds(Component);
