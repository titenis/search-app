import React, { FC, Suspense, lazy } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { ErrorBoundary } from 'molecules/ErrorBoundary';
import { theme } from 'theme';
import { Container, styled } from '@material-ui/core';
import { Spinner } from 'atoms/Spinner';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppBar from 'organisms/AppBar';

const CatsList = lazy(() => import('pages/CatsList'));
const NotFound = lazy(() => import('pages/NotFound'));

const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}));

export const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <AppBar />
              <StyledContainer>
                <Switch>
                  <Route exact path="/">
                    <CatsList />
                  </Route>
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </StyledContainer>
            </BrowserRouter>
          </ThemeProvider>
        </QueryClientProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
