import '@testing-library/jest-dom';

import { serverSetup } from 'setupMockServer';
import { setLogger } from 'react-query';

beforeAll(() => {
  setLogger({
    log: window.console.log,
    warn: window.console.warn,
    error: () => false,
  });
  serverSetup.listen({
    onUnhandledRequest: 'error',
  });
});
afterEach(() => serverSetup.resetHandlers());
afterAll(() => serverSetup.close());
