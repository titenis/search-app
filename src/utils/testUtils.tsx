import React, { FC, ReactElement } from 'react';

import { render, RenderResult } from '@testing-library/react';
import { createMemoryHistory, History } from 'history';
import { Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from 'theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook, RenderHookResult } from '@testing-library/react-hooks';

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

const customRender = (
  ui: ReactElement,
  { history = createMemoryHistory(), ...restOptions } = {},
): RenderResult =>
  render(ui, {
    wrapper: Providers(history),
    ...restOptions,
  });

export const customRenderHook = <P, R>(
  hook: (props?: P) => R,
  { history = createMemoryHistory(), ...options } = {},
): RenderHookResult<P, R> =>
  renderHook(hook, {
    wrapper: Providers(history),
    ...options,
  });

export * from '@testing-library/react';

export { customRender as render };
export { customRenderHook as renderHook };
