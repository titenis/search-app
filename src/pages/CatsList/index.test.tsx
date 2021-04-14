import React from 'react';
import { render, screen, waitForElementToBeRemoved } from 'utils/testUtils';
import CatsList from 'pages/CatsList/index';

describe('CatsList', () => {
  const getSpinner = () => screen.getByRole('progressbar');

  it('should render', async () => {
    render(<CatsList />);

    await waitForElementToBeRemoved(getSpinner());

    expect(screen.getAllByRole('row')).toHaveLength(6);
    expect(screen.getByText('1-5 of 6')).toBeVisible();
  });
});
