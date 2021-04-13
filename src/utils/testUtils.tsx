import React, { FC, ReactElement } from 'react';

import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query';

export const Providers = (history: History): FC => ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Router history={history}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export interface ICustomRenderOptions extends Omit<RenderOptions, 'queries'> {
  history?: History;
}

export type ICustomRender = (
  ui: ReactElement,
  options?: ICustomRenderOptions,
) => RenderResult;

const customRender: ICustomRender = (
  ui: ReactElement,
  { history = createMemoryHistory(), ...restOptions } = {},
) =>
  render(ui, {
    wrapper: Providers(history),
    ...restOptions,
  });

export * from '@testing-library/react';

export { customRender as render };
