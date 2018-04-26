import React from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default () => {
  return WrappedComponent => {
    return class extends React.Component {
      static displayName = `WithErrorBoundaries${WrappedComponent.name || 'Component'}`
      
      constructor(props, context) {
        super(props, context);
      }

      render() {
        return (
          <ErrorBoundary>
            <WrappedComponent {...this.props} />
          </ErrorBoundary>
        );
      }
    };
  };
};
