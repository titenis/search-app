import { CircularProgress, styled } from '@material-ui/core';

export const Spinner = styled(CircularProgress)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  marginTop: '-20px',
  marginLeft: '-20px',
});
