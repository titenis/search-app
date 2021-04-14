import React from 'react';
import { BreedRow } from 'molecules/BreedRow/index';
import { Abyssian } from 'mock/data';
import { render } from 'utils/testUtils';

describe('BreedRow', () => {
  it('should render', () => {
    const { container } = render(
      <table>
        <tbody>
          <BreedRow {...Abyssian} />
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });
});
