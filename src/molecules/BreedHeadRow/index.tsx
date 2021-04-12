import TableCell from '@material-ui/core/TableCell';
import { SortLabel } from 'molecules/SortLabel';
import TableRow from '@material-ui/core/TableRow';
import React, { FC } from 'react';

export const BreedHeadRow: FC = () => (
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
);
