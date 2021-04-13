import { renderHook } from 'utils/testUtils';
import { usePagination } from 'hooks/usePagination';
import {
  Abyssian,
  Aegean,
  AmericanShorthair,
  AmericanWirehair,
  catBreedsMock,
} from 'mock/data';
import { createMemoryHistory } from 'history';

describe('usePagination', () => {
  it('should return correct 1st page', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?rows_per_page=2'],
    });
    const { result } = renderHook(() => usePagination(catBreedsMock), {
      history,
    });

    expect(result.current.length).toBe(2);
    expect(result.current).toStrictEqual([Abyssian, Aegean]);
  });

  it('should return correct 3rd page', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?rows_per_page=2&page=2'],
    });
    const { result } = renderHook(() => usePagination(catBreedsMock), {
      history,
    });

    expect(result.current.length).toBe(2);
    expect(result.current).toStrictEqual([AmericanShorthair, AmericanWirehair]);
  });
});
