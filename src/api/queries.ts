import { AxiosResponse } from 'axios';
import { ICatBreed } from 'api/types';
import { CAT_BREEDS_URL } from 'api/routes';
import { axios } from 'api/axios';

export const getCatBreeds = (): Promise<AxiosResponse<ICatBreed[]>> =>
  axios.get<ICatBreed[]>(CAT_BREEDS_URL);
