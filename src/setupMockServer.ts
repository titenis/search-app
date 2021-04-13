import { setupServer } from 'msw/node';
import { catBreedsMock } from 'mock/data';
import { RequestHandler, rest } from 'msw';
import { CAT_BREEDS_URL } from 'api/routes';

export const mockGetBreeds = (body = catBreedsMock): RequestHandler =>
  rest.get(
    `${process.env.REACT_APP_API_BASE}${CAT_BREEDS_URL}`,
    (req, res, ctx) => res(ctx.json(body)),
  );

export const serverSetup = setupServer(mockGetBreeds());
