// @flow
import { handleActions } from 'redux-actions';
import { setAllCompaniesToStoreAction } from 'actions';

const defaultState = {
    companies: []
};

export const companiesReducer = handleActions({
    [setAllCompaniesToStoreAction]: (state, { payload: companies }) => ({...state, companies })
}, defaultState);
