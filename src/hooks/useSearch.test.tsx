import { renderHook } from 'utils/testUtils';
import { AmericanCurl, catBreedsMock } from 'mock/data';
import { useSearch } from 'hooks/useSearch';
import { SearchableBreed } from 'pages/CatsList';
import { createMemoryHistory } from 'history';

describe('useSearch', () => {
  it('should return if no search', () => {
    const { result } = renderHook(() =>
      useSearch(catBreedsMock as SearchableBreed[], ['name']),
    );

    expect(result.current).toStrictEqual(catBreedsMock);
  });

  it('should find by name', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?search=American Curl'],
    });
    const { result } = renderHook(
      () => useSearch(catBreedsMock as SearchableBreed[], ['name']),
      { history },
    );

    expect(result.current).toStrictEqual([AmericanCurl]);
  });

  it('should return empty if not found', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?search=asdf'],
    });
    const { result } = renderHook(
      () => useSearch(catBreedsMock as SearchableBreed[], ['name']),
      { history },
    );

    expect(result.current).toStrictEqual([]);
  });
});
