import React from 'react';

// Main components
import MainPage from '../components/MainPage/MainPage';
import AddOrgForm from '../components/AddOrgForm/AddOrgForm';
import OrganizationsList from '../components/OrganizationsList/OrganizationsList';

// Main router
const router = {
  mainMenuLinks: [
    {
      path: '/',
      component: () => <MainPage />,
      linkName: 'Main Page',
      exact: true
    },
    {
      path: '/add-organization',
      component: () => <AddOrgForm />,
      linkName: 'Add Organization',
      exact: false
    },
    {
      path: '/show-all-organization',
      component: () => <OrganizationsList />,
      linkName: 'Show All Organization',
      exact: false
    }
  ]
};

export default router;
