// @flow
import { handleActions } from 'redux-actions';
import { setAllCompaniesToStore } from 'actions';

const defaultState = {
    companies: []
};

export const companiesReducer = handleActions({
    [setAllCompaniesToStore]: (state, { payload }) => ({...state, companies: payload})
}, defaultState);
