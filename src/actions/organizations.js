import { ADD_ORG } from '../constants';

export const addNewORG = (url, body) => (dispatch, getState, api) =>
  api.addORG(url, body).then(() => dispatch(addPosts(body)));

export const addPosts = org => ({ type: ADD_ORG, org });
