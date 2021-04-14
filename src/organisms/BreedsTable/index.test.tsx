import React from 'react';
import { BreedsTable } from 'organisms/BreedsTable/index';
import { catBreedsMock } from 'mock/data';
import { render, screen } from 'utils/testUtils';

describe('BreedsTable', () => {
  it('should render', () => {
    render(
      <BreedsTable breeds={catBreedsMock} totalCount={catBreedsMock.length} />,
    );

    expect(screen.getAllByRole('row')).toHaveLength(catBreedsMock.length + 1);
    expect(screen.getByText('1-5 of 6')).toBeVisible();
  });
});
