import React from 'react';

import AddOrgForm from './AddOrgForm/AddOrgForm';
import OrganizationsList from './OrganizationsList/OrganizationsList';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <React.StrictMode>
          <h1>Spravker</h1>
          <AddOrgForm />
          <OrganizationsList />
        </React.StrictMode>
      </React.Fragment>
    );
  }
}
