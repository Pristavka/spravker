import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
// Actions from firebase
import { addNewOrganizationToFirestore } from '../../actions/firebase/organizations';
import { getUserFromFirestore } from '../../actions/firebase/user';
// Selectors for redux
import { getUserFromStoreWithSelector } from '../../selectors/user';

import WithReplacerFromRusToEng from '../HOC/WithReplacerFromRusToEng';

@WithReplacerFromRusToEng()
@connect(
  store => getUserFromStoreWithSelector(store),
  {
    addNewOrganizationToFirestore,
    getUserFromFirestore,
    replace
  })
export default class AddOrgForm extends React.Component {
  static propTypes = {
    addNewOrganizationToFirestore: PropTypes.func.isRequired,
    replacerFromRusToEng: PropTypes.func.isRequired,
    getUserFromFirestore: PropTypes.func,
    replace: PropTypes.func,
    user: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      title: '',
      body: ''
    };
  }

  componentDidMount() {
    this.props.getUserFromFirestore();
    this.props.replace('/login');
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
