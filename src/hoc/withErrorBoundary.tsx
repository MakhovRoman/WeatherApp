import { ErrorBoundary, ErrorBoundaryProps } from '@components/ErrorBoundary/ErrorBoundary';
import React from 'react';

export function withErrorBoundary<P extends React.PropsWithChildren = React.PropsWithChildren>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps: ErrorBoundaryProps = {}
): React.ComponentType<P> {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithErrorBoundary: React.ComponentType<P> = (props) => {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <WrappedComponent {...props} />
      </ErrorBoundary>
    );
  };

  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${displayName})`;

  return ComponentWithErrorBoundary;
}
