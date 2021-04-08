import React, { FC, Suspense } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { CatsList } from 'pages/CatsList';
import { ErrorBoundary } from 'molecules/ErrorBoundary';

export const App: FC = () => (
  <ErrorBoundary>
    <Suspense fallback={<>Loading ..</>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <CatsList />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  </ErrorBoundary>
);
