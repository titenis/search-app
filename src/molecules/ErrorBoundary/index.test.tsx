import React from 'react';
import { render, screen } from 'utils/testUtils';
import { ErrorBoundary } from 'molecules/ErrorBoundary/index';

describe('ErrorBoundary', () => {
  jest.spyOn(console, 'error').mockImplementation(() => false);

  const ComponentWithError = () => {
    throw new Error();
  };

  it('should show error', () => {
    render(
      <ErrorBoundary>
        <ComponentWithError />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText('Theres been an error. Please reload the page'),
    ).toBeVisible();
  });
});
