import React from 'react';
import { PropTypes } from 'prop-types';

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      hasError: false,
      error: '',
      info: ''
    };
  }

  componentDidCatch(error, info) {
    this.setState(() => ({ hasError: true, error, info }));
  }

  renderErrorMessage = () => (
    <React.Fragment>
      <h1>Oooops we have an Error!</h1>
      <h3>{this.state.error}</h3>
      <p>{this.state.info}</p>
    </React.Fragment>
  )

  render() {
    if (this.state.hasError) return this.renderErrorMessage();
    return this.props.children;
  }
}
