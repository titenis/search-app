import React from 'react';
import { render, screen } from 'utils/testUtils';
import { Highlightable } from '.';
import { createMemoryHistory } from 'history';

describe('Highlightable', () => {
  it('should not render', () => {
    render(<Highlightable />);

    expect(screen.queryByTestId('highlighter')).not.toBeInTheDocument();
  });

  it('should render', () => {
    const { container } = render(<Highlightable>test</Highlightable>);

    expect(screen.getByTestId('highlighter')).toBeVisible();
    expect(container.querySelector('mark')).toBe(null);
  });

  it('should highlight', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?search=searched'],
    });
    const { container } = render(
      <Highlightable>text to be searched</Highlightable>,
      { history },
    );

    expect(container.querySelector('mark')).toBeVisible();
  });
});
