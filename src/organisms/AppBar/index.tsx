import { Search } from 'molecules/Search';
import React, { FC } from 'react';
import {
  AppBar as MaterialAppBar,
  styled,
  Toolbar,
  Typography,
} from '@material-ui/core';

const Title = styled(Typography)({
  padding: `12px 0`,
  lineHeight: 1,
});

const AppBar: FC = () => (
  <MaterialAppBar>
    <Toolbar>
      <Title variant="h6">Cat breeds</Title>
      <Search />
    </Toolbar>
  </MaterialAppBar>
);

export default AppBar;
