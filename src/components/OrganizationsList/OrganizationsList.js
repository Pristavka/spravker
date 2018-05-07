import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Actions from firebase
import { fetchAndSubscribeInitialDataFromFirestore } from '../../actions/firebase/organizations';
// Selectors for redux
import { getOrganizationsFromStoreWithSelector } from '../../selectors/organizations';

import WithErrorBoundaries from '../HOC/WithErrorBoundaries';
import Organization from '../Organization/Organization';

@WithErrorBoundaries()
@connect(
  store => getOrganizationsFromStoreWithSelector(store),
  { fetchAndSubscribeInitialDataFromFirestore }
)
export default class OrganizationsList extends React.Component {
  static propTypes = {
    fetchAndSubscribeInitialDataFromFirestore: PropTypes.func.isRequired,
    orgs: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchAndSubscribeInitialDataFromFirestore();
  }

  render() {
    const orgList = this.props.orgs.map(org => (
      <Organization org={org} key={org.id} />
    ));
    return <React.Fragment>{orgList}</React.Fragment>;
  }
}
