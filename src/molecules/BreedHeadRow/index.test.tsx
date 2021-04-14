import React from 'react';
import { render } from 'utils/testUtils';
import { BreedHeadRow } from 'molecules/BreedHeadRow/index';

describe('BreedHeadRow', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <thead>
          <BreedHeadRow />
        </thead>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });
});
