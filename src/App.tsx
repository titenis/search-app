import React, { FC, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { fade, Theme, ThemeProvider } from '@material-ui/core/styles';
import { NotFound } from 'pages/NotFound';
import { CatsList } from 'pages/CatsList';
import { ErrorBoundary } from 'molecules/ErrorBoundary';
import SearchIcon from '@material-ui/icons/Search';
import { theme } from 'theme';
import {
  AppBar,
  Container,
  createStyles,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);

export const App: FC = () => {
  const classes = useStyles();
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <Suspense fallback={<>Loading ..</>}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <AppBar>
                <Toolbar>
                  <Typography variant="h6">Cat breeds</Typography>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Toolbar>
              </AppBar>
              <Container style={{ paddingTop: '80px' }}>
                <Switch>
                  <Route exact path="/">
                    <CatsList />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </Container>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
