// @flow
import { createActions } from 'redux-actions';

export const GET_ALL_COMPANIES_FROM_API_ACTION = 'GET_ALL_COMPANIES_FROM_API_ACTION';
export const SET_ALL_COMPANIES_TO_STORE_ACTION = 'SET_ALL_COMPANIES_TO_STORE_ACTION';

export const {
    getAllCompaniesFromApiAction,
    setAllCompaniesToStoreAction
} = createActions({
    GET_ALL_COMPANIES_FROM_API_ACTION: payload => payload,
    SET_ALL_COMPANIES_TO_STORE_ACTION: companies => companies
});
