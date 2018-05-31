import React from 'react';

import replacerFromRusToEng from '../../services/replaceFromRusToEng';

export default () => {
  return WrappedComponent => {
    return class extends React.Component {
      static displayName = `WithReplacerFromRusToEng(${WrappedComponent.name ||
        'Component'})`;

      constructor(props, context) {
        super(props, context);
      }

      render() {
        return (
          <WrappedComponent
            replacerFromRusToEng={replacerFromRusToEng}
            {...this.props}
          />
        );
      }
    };
  };
};
