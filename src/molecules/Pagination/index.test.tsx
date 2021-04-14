import React from 'react';
import { render, screen } from 'utils/testUtils';
import { Pagination } from 'molecules/Pagination/index';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';

describe('Pagination', () => {
  const getPrevBtn = () =>
    screen.getByRole('button', { name: 'Previous page' });
  const getNextBtn = () => screen.getByRole('button', { name: 'Next page' });

  it('should render by default', () => {
    render(<Pagination count={12} />);

    expect(getPrevBtn()).toBeDisabled();
    expect(getNextBtn()).toBeEnabled();
    expect(screen.getByText('1-5 of 12')).toBeVisible();
  });

  it('should render selected page', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?page=1'],
    });
    render(<Pagination count={12} />, { history });

    expect(getPrevBtn()).toBeEnabled();
    expect(getNextBtn()).toBeEnabled();
    expect(screen.getByText('6-10 of 12')).toBeVisible();
  });

  it('should handle page change', () => {
    const history = createMemoryHistory();
    render(<Pagination count={12} />, { history });

    userEvent.click(getNextBtn());

    expect(getPrevBtn()).toBeEnabled();
    expect(getNextBtn()).toBeEnabled();
    expect(screen.getByText('6-10 of 12')).toBeVisible();
    expect(history.location.search).toBe('?page=1');
  });

  it('should handle rows per page change', () => {
    const history = createMemoryHistory();
    render(<Pagination count={12} />, { history });

    userEvent.click(screen.getByRole('button', { name: 'Rows per page: 5' }));
    userEvent.click(screen.getByRole('option', { name: '10' }));

    expect(
      screen.getByRole('button', { name: 'Rows per page: 10' }),
    ).toBeVisible();
    expect(screen.getByText('1-10 of 12')).toBeVisible();
    expect(history.location.search).toBe('?rows_per_page=10');
  });
});
