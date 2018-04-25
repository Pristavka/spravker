import React from 'react';

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default WrappedComponent => {
  return class extends React.Component {
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
