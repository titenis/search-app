import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import { BreedHeadRow } from 'molecules/BreedHeadRow';
import TableBody from '@material-ui/core/TableBody';
import { BreedRow } from 'molecules/BreedRow';
import { Pagination } from 'molecules/Pagination';
import Paper from '@material-ui/core/Paper';
import React, { FC } from 'react';
import { ICatBreed } from 'api/types';

interface IBreedsTableProps {
  breeds: ICatBreed[];
  totalCount: number;
}

export const BreedsTable: FC<IBreedsTableProps> = ({ breeds, totalCount }) => (
  <Paper>
    <TableContainer>
      <Table>
        <TableHead>
          <BreedHeadRow />
        </TableHead>
        <TableBody>
          {breeds.map(breed => (
            <BreedRow key={breed.id} {...breed} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={totalCount} />
  </Paper>
);
