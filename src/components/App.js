import React from 'react';

import AddOrgForm from './AddOrgForm/AddOrgForm';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Spravker</h1>
        <AddOrgForm />
      </div>
    );
  }
}
