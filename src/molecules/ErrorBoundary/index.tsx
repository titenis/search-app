import React, { Component, PropsWithChildren, ReactNode } from 'react';
import Alert from '@material-ui/lab/Alert';

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<
  PropsWithChildren<unknown>,
  IErrorBoundaryState
> {
  public constructor(props: PropsWithChildren<unknown>) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(): IErrorBoundaryState {
    return { hasError: true };
  }

  public render(): ReactNode {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Alert severity="error">
          Theres been an error. Please reload the page
        </Alert>
      );
    }

    return children;
  }
}
