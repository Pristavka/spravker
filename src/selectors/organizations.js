import { createSelector } from 'reselect';

const getOrganizationsFromStore = store => {
  const { organizations: { organizations } } = store;
  return organizations;
};

// Memoize selectors
const getOrganizationsFromStoreWithSelector = createSelector(
  [getOrganizationsFromStore],
  organizations => ({ orgs: organizations })
);

export {
  getOrganizationsFromStoreWithSelector
};