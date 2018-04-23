import React from 'react';

import AddOrgForm from './AddOrgForm/AddOrgForm';
import OrganizationsList from './OrganizationsList/OrganizationsList';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Spravker</h1>
        <AddOrgForm />
        <OrganizationsList />
      </div>
    );
  }
}
