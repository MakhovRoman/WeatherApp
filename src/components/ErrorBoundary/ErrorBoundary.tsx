import React from "react";

type ErrorBoundaryState = { error: Error | null};

export type ErrorBoundaryProps = {
  fallback?: React.ReactElement<unknown, string | React.FunctionComponent> | null;
  FallbackComponent?: React.FunctionComponent<{
    error: ErrorBoundaryState["error"];
    resetErrorBoundary: (...args: Array<unknown>) => void;
  }>;
  onReset?: (...args: Array<unknown>) => void;
};

const initialState: ErrorBoundaryState = { error: null };



export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<ErrorBoundaryProps>,
  ErrorBoundaryState
> {
  state = initialState;

  static getDerivedStateFromError(error: Error) {

    return { error }
  }

  // componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {


  //   logErrorToMyService(error, errorInfo.componentStack);
  // }

  resetErrorBoundary = (...args: Array<unknown>) => {
    this.props.onReset?.(...args);
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  render() {
    const { error } = this.state;
    const { fallback , FallbackComponent } = this.props;

    if (error) {
      const fallbackComponentProps = {
        error,
        resetErrorBoundary: this.resetErrorBoundary,
      };

      if (React.isValidElement(fallback)) {
        return fallback;
      } else if (FallbackComponent) {
        return <FallbackComponent {...fallbackComponentProps} />;
      }

      return (
        <div>
          Не удалось загрузить...
        </div>
      )
    }

    return this.props.children;
  }
}
