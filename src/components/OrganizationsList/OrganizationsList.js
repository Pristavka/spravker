import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// import { fetchOrgsAsync } from '../../actions/organizations';
import { fetchInitialDataFromFirebase } from '../../actions/firebase/organizations';

import WithErrorBoundaries from '../HOC/WithErrorBoundaries';
import Organization from '../Organization/Organization';
// import urls from '../../configs/urls';

@WithErrorBoundaries()
@connect(
  ({ organizations: { organizations } }) => ({ orgs: organizations }),
  { /*fetchOrgsAsync,*/ fetchInitialDataFromFirebase }
)
export default class OrganizationsList extends React.Component {
  static propTypes = {
    // fetchOrgsAsync: PropTypes.func.isRequired,
    fetchInitialDataFromFirebase: PropTypes.func.isRequired,
    orgs: PropTypes.array.isRequired
  };

  componentDidMount() {
    // this.props.fetchOrgsAsync(urls.fetchOrgs);
    this.props.fetchInitialDataFromFirebase();
  }

  render() {
    const orgList = this.props.orgs.map(org => (
      <Organization org={org} key={org.id} />
    ));
    return <React.Fragment>{orgList}</React.Fragment>;
  }
}
