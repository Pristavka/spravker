import { createSelector } from 'reselect';

const getRouterFromStore = store => store.router;

// Memoize selectors
const getRouterFromStoreWithSelector = createSelector(
  [getRouterFromStore],
  router => router
);

export {
  getRouterFromStoreWithSelector
};