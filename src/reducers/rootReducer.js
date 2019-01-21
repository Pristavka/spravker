// @flow
import { combineReducers } from 'redux';
import { companiesReducer } from 'reducers/companies';

export const rootReducer = combineReducers({
    companies: companiesReducer
});
