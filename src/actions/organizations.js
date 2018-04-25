import { FETCH_ORGS, ADD_ORG } from './constants';

// Thunk
const addOrgAsync = (url, body) => (dispatch, getState, api) =>
  api.addOrgAsync(url, body).then(data => dispatch(addOrg(data)));

const fetchOrgsAsync = url => (dispatch, getState, api) =>
  api.fetchOrgsAsync(url).then(data => dispatch(fetchOrgs(data)));

// Basics actions
const fetchOrgs = orgs => ({ type: FETCH_ORGS, payload: orgs });
const addOrg = org => ({ type: ADD_ORG, payload: org });

export {
  addOrgAsync,
  fetchOrgsAsync
};
