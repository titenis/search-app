import React from 'react';
import AppBar from 'organisms/AppBar/index';
import { render, screen } from 'utils/testUtils';

describe('AppBar', () => {
  it('should render', () => {
    render(<AppBar />);

    expect(screen.getByText('Cat breeds')).toBeVisible();
    expect(screen.getByPlaceholderText('Search…')).toBeVisible();
  });
});
