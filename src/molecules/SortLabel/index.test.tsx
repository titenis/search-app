import React from 'react';
import { render, screen } from 'utils/testUtils';
import { SortLabel } from 'molecules/SortLabel/index';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';

describe('SortLabel', () => {
  const name = 'sortName';
  const getBtn = () => screen.getByRole('button', { name: 'testing' });

  it('should render', () => {
    render(<SortLabel name={name}>testing</SortLabel>);

    expect(getBtn()).toBeVisible();
  });

  it('should handle click', () => {
    const history = createMemoryHistory();
    render(<SortLabel name={name}>testing</SortLabel>, { history });

    userEvent.click(getBtn());
    expect(history.location.search).toBe(`?sort=${name}.asc`);

    userEvent.click(getBtn());
    expect(history.location.search).toBe(`?sort=${name}.desc`);
  });
});
