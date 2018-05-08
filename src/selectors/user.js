import { createSelector } from 'reselect';

const getUserFromStore = store => store.user.autorizedUser;

// Memoize selectors
const getUserFromStoreWithSelector = createSelector(
  [getUserFromStore],
  user => user
);

export { getUserFromStoreWithSelector };
