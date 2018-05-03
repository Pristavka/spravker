import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addNewOrganizationToFirestore } from '../../actions/firebase/organizations';

import WithReplacerFromRusToEng from '../HOC/WithReplacerFromRusToEng';

@WithReplacerFromRusToEng()
@connect(null, { addNewOrganizationToFirestore })
export default class AddOrgForm extends React.Component {
  static propTypes = {
    addNewOrganizationToFirestore: PropTypes.func.isRequired,
    replacerFromRusToEng: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleOnChange = e => {
    e.persist();
    this.setState(state => ({ ...state, [e.target.name]: e.target.value }));
  };

  handleOnSubmit = e => {
    e.preventDefault();

    const newOrganization = {
      url: this.props.replacerFromRusToEng(this.state.title),
      title: this.state.title,
      body: this.state.body
    };

    this.props.addNewOrganizationToFirestore(newOrganization);
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
