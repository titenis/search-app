import React, { FC } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useQuery } from 'react-query';
import { getCatBreeds } from 'api/queries';
import { CircularProgress } from '@material-ui/core';

export const CatsList: FC = () => {
  const { isLoading, data } = useQuery('todos', getCatBreeds);

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Origin</TableCell>
            <TableCell align="right">Life span</TableCell>
            <TableCell align="right">Temperament</TableCell>
            <TableCell align="right">Wiki</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.origin}</TableCell>
              <TableCell align="right">{row.life_span}</TableCell>
              <TableCell align="right">{row.temperament}</TableCell>
              <TableCell align="right">{row.wikipedia_url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
