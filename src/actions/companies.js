// @flow
import { createActions } from 'redux-actions';

const commonActionCreator = createActions('');

export const GET_ALL_COMPANIES = 'GET_ALL_COMPANIES';

export const getAllCompaniesAction = commonActionCreator(GET_ALL_COMPANIES);
