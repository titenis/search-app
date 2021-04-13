import { renderHook } from 'utils/testUtils';
import { Abyssian, catBreedsMock } from 'mock/data';
import { SortableBreed } from 'pages/CatsList';
import { createMemoryHistory } from 'history';
import { useSort } from 'hooks/useSort';

describe('useSort', () => {
  const firstBreed = { ...Abyssian, name: 'zzz' };
  const secondBreed = { ...Abyssian, name: 'ggg' };
  const thirdBreed = { ...Abyssian, name: 'aaa' };

  it('should return if no sort', () => {
    const { result } = renderHook(() =>
      useSort(catBreedsMock as SortableBreed[]),
    );

    expect(result.current).toStrictEqual(catBreedsMock);
  });

  it('should sort asc', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?sort=name.asc'],
    });
    const { result } = renderHook(
      () =>
        useSort([
          secondBreed,
          secondBreed,
          thirdBreed,
          firstBreed,
        ] as SortableBreed[]),
      { history },
    );

    expect(result.current).toStrictEqual([
      thirdBreed,
      secondBreed,
      secondBreed,
      firstBreed,
    ]);
  });

  it('should sort desc', () => {
    const history = createMemoryHistory({
      initialEntries: ['/?sort=name.desc'],
    });
    const { result } = renderHook(
      () =>
        useSort([
          secondBreed,
          secondBreed,
          thirdBreed,
          firstBreed,
        ] as SortableBreed[]),
      { history },
    );

    expect(result.current).toStrictEqual([
      firstBreed,
      secondBreed,
      secondBreed,
      thirdBreed,
    ]);
  });
});
