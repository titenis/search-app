import React, { ComponentType } from 'react';
import { ICatBreed } from 'api/types';
import { useQuery } from 'react-query';
import { getCatBreeds } from 'api/queries';
import { Spinner } from 'atoms/Spinner';
import { GET_CAT_BREEDS_KEY } from 'api/queryKeys';
import Alert from '@material-ui/lab/Alert';

export interface IWithCatBreedsProps {
  catBreeds: ICatBreed[];
}

export const withCatBreeds = <P extends unknown>(
  OriginalComponent: ComponentType<IWithCatBreedsProps & P>,
): ComponentType<P> => {
  const Component = (props: P) => {
    const { isLoading, data, error } = useQuery(
      GET_CAT_BREEDS_KEY,
      getCatBreeds,
    );

    if (isLoading) {
      return <Spinner />;
    }

    if (error) {
      return (
        <Alert severity="error">
          There was a problem while loading cat breeds
        </Alert>
      );
    }

    return <OriginalComponent {...props} catBreeds={data?.data ?? []} />;
  };

  Component.displayName = `WithCatBreeds(${
    OriginalComponent.displayName || OriginalComponent.name || 'Component'
  })`;

  return Component;
};
