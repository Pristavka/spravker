import { createSelector } from 'reselect';

const getUserFromStore = store => store.user;

// Memoize selectors
const getUserFromStoreWithSelector = createSelector(
  [getUserFromStore],
  user => user
);

export {
  getUserFromStoreWithSelector
};