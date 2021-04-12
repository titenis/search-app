import TableCell from '@material-ui/core/TableCell';
import { Highlightable } from 'atoms/Highlightable';
import LinkIcon from '@material-ui/icons/Link';
import TableRow from '@material-ui/core/TableRow';
import React, { FC } from 'react';
import { ICatBreed } from 'api/types';

export const BreedRow: FC<ICatBreed> = ({
  name,
  origin,
  life_span,
  temperament,
  weight,
  wikipedia_url,
}) => (
  <TableRow>
    <TableCell component="th" scope="row">
      <Highlightable>{name}</Highlightable>
    </TableCell>
    <TableCell align="right">
      <Highlightable>{origin}</Highlightable>
    </TableCell>
    <TableCell align="right">{life_span}</TableCell>
    <TableCell align="right">
      <Highlightable>{temperament}</Highlightable>
    </TableCell>
    <TableCell align="right">{weight.metric}</TableCell>
    <TableCell align="right">
      <a target="_blank" href={wikipedia_url} rel="noreferrer">
        <LinkIcon />
      </a>
    </TableCell>
  </TableRow>
);
