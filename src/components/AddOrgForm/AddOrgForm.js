import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addOrgAsync } from '../../actions/organizations';
import urls from '../../configs/urls';

@connect(null, { addOrgAsync })
export default class AddOrgForm extends React.Component {
  static propTypes = {
    addOrgAsync: PropTypes.func.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const newOrganization = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.addOrgAsync(urls.fetchOrgs, newOrganization);

  };

  render() {
    return (
      <div>
        <h1>Add New Organization</h1>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleOnChange}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
