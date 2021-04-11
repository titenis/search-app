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

const Component: FC<IWithCatBreedsProps> = ({ catBreeds }) => {
  const paginatedBreeds = usePagination<ICatBreed>(catBreeds);

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Origin</TableCell>
              <TableCell align="right">Life span</TableCell>
              <TableCell align="right">Temperament</TableCell>
              <TableCell align="right">Weight (kg)</TableCell>
              <TableCell align="right">Wiki</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedBreeds.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.origin}</TableCell>
                <TableCell align="right">{row.life_span}</TableCell>
                <TableCell align="right">{row.temperament}</TableCell>
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
      <Pagination count={catBreeds.length} />
    </Paper>
  );
};

export const CatsList = withCatBreeds(Component);
