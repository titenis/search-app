import React, { FC, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { NotFound } from 'pages/NotFound';
import { CatsList } from 'pages/CatsList';
import { ErrorBoundary } from 'molecules/ErrorBoundary';
import { theme } from 'theme';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Search } from 'molecules/Search';

export const App: FC = () => {
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
                  <Search />
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
