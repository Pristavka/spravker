import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchOrgsAsync } from '../../actions/organizations';

import WithErrorBoundaries from '../HOC/WithErrorBoundaries';
import Organization from '../Organization/Organization';
import urls from '../../configs/urls';

@connect(
  ({ organizations: { organizations } }) => ({ orgs: organizations }),
  { fetchOrgsAsync }
)
class OrganizationsList extends React.Component {
  static propTypes = {
    fetchOrgsAsync: PropTypes.func.isRequired,
    orgs: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchOrgsAsync(urls.fetchOrgs);
  }

  render() {
    const orgList = this.props.orgs.map(org => (
      <Organization org={org} key={org.id} />
    ));
    return <React.Fragment>{orgList}</React.Fragment>;
  }
}

export default WithErrorBoundaries(OrganizationsList);
