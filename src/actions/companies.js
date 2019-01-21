// @flow
import { createAction } from 'redux-actions';

// const commonActionCreator = createActions('');
// export const getAllCompaniesAction = commonActionCreator(GET_ALL_COMPANIES);

export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';
export const SET_ALL_COMPANIES_TO_STORE = 'SET_ALL_COMPANIES_TO_STORE';


export const getAllCompaniesFromApiAction = createAction(GET_ALL_COMPANIES);
export const setAllCompaniesToStore = createAction(SET_ALL_COMPANIES_TO_STORE);
