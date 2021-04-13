import React from 'react';
import { withCatBreeds } from 'hocs/withCatBreeds';
import { render, screen, waitForElementToBeRemoved } from 'utils/testUtils';
import { mockGetBreeds, serverSetup } from 'setupMockServer';
import { Abyssian } from 'mock/data';
import { rest } from 'msw';
import { CAT_BREEDS_URL } from 'api/routes';

describe('withCatBreeds', () => {
  const mockComponent = jest.fn(() => null);
  const Component = withCatBreeds(mockComponent);

  const getSpinner = () => screen.getByRole('progressbar');

  it('should pass data', async () => {
    serverSetup.use(mockGetBreeds([Abyssian]));
    render(<Component />);

    expect(getSpinner()).toBeVisible();

    await waitForElementToBeRemoved(getSpinner());

    expect(mockComponent).toHaveBeenCalledTimes(1);
    expect(mockComponent).toHaveBeenCalledWith(
      {
        catBreeds: [Abyssian],
      },
      expect.anything(),
    );
  });

  it('should show error', async () => {
    serverSetup.use(
      rest.get(
        `${process.env.REACT_APP_API_BASE}${CAT_BREEDS_URL}`,
        (req, res, ctx) =>
          res(ctx.status(500), ctx.json({ message: 'Internal Server Error' })),
      ),
    );

    render(<Component />);

    await waitForElementToBeRemoved(getSpinner());

    expect(
      screen.getByText('There was a problem while loading cat breeds'),
    ).toBeVisible();
    expect(mockComponent).toHaveBeenCalledTimes(0);
  });

  it('should pass default data', async () => {
    serverSetup.use(
      rest.get(
        `${process.env.REACT_APP_API_BASE}${CAT_BREEDS_URL}`,
        (req, res, ctx) => res(ctx.json(undefined)),
      ),
    );

    render(<Component />);

    await waitForElementToBeRemoved(getSpinner());

    expect(mockComponent).toHaveBeenCalledTimes(1);
    expect(mockComponent).toHaveBeenCalledWith(
      {
        catBreeds: [],
      },
      expect.anything(),
    );
  });
});
