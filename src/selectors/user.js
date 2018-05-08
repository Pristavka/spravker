import { createSelector } from 'reselect';

const getUserFromStore = store => store.user.autorizedUser;
const getSignInErrorFromStore = store => store.user.error;

// Memoize selectors
const getUserFromStoreWithSelector = createSelector(
  [getUserFromStore],
  user => user
);
const getSignInErrorFromStoreWithSelector = createSelector(
  [getSignInErrorFromStore],
  error => error
);

export {
  getUserFromStoreWithSelector,
  getSignInErrorFromStoreWithSelector
};
