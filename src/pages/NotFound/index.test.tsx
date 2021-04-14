import React from 'react';
import NotFound from 'pages/NotFound/index';
import { render, screen } from 'utils/testUtils';

describe('NotFound', () => {
  it('should render', () => {
    render(<NotFound />);

    expect(screen.getByText('Page not found!')).toBeVisible();
  });
});
