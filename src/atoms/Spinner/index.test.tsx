import React from 'react';
import { render, screen } from 'utils/testUtils';
import { Spinner } from '.';

describe('Spinner', () => {
  it('should render', () => {
    render(<Spinner />);

    expect(screen.getByRole('progressbar')).toBeVisible();
  });
});
