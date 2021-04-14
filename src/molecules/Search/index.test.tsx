import React from 'react';
import { Search } from 'molecules/Search/index';
import { render, screen } from 'utils/testUtils';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  const getInput = () => screen.getByPlaceholderText('Search…');
  it('should render by default', () => {
    render(<Search />);

    expect(getInput()).toBeVisible();
  });

  it('should render selected value', () => {
    const testValue = 'testing';
    const history = createMemoryHistory({
      initialEntries: [`/?search=${testValue}`],
    });
    render(<Search />, { history });

    expect(getInput()).toHaveValue(testValue);
  });

  it('should handle change', () => {
    const testValue = 'testing';
    const history = createMemoryHistory();
    render(<Search />, { history });

    userEvent.type(getInput(), testValue);

    expect(history.location.search).toBe(`?search=${testValue}`);

    userEvent.clear(getInput());
    expect(history.location.search).toBe('');
  });
});
