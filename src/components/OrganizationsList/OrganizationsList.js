import React from 'react';
import { connect } from 'react-redux';

import { fetchOrgsAsync } from '../../actions/organizations';

import Organization from '../Organization/Organization';
// import styles from './OrganizationsList.scss';
import urls from '../../configs/urls';

class OrganizationsList extends React.Component {
  componentDidMount() {
    this.props.fetchOrgsAsync(urls.fetchOrgs);
  }

  render() {
    const orgList = this.props.orgs.map(org => (
      <Organization org={org} key={org.id}/>
    ));
    return (
      <React.Fragment>
        {orgList}
      </React.Fragment>
    );
  }
}

export default connect(
  ({ organizations }) => ({ orgs: organizations.organizations }),
  { fetchOrgsAsync }
)(OrganizationsList);
