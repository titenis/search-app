export const changeSearchParams = (
  params: URLSearchParams,
  key: string,
  value?: string,
): URLSearchParams => {
  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params;
};
