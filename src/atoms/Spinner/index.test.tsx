import React from 'react';
import { render } from 'utils/testUtils';
import { Spinner } from '.';

describe('Spinner', () => {
  it('should render', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
