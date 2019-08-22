import { createAction } from 'redux-actions';
import * as TYPES from './test.types';
export const getTestDataEpics = createAction(TYPES.GET_TEST_DATA_EPIC);
export const getTestDataLoading = createAction(TYPES.GET_TEST_DATA_LOADING);
export const getTestDataSuccess = createAction(TYPES.GET_TEST_DATA_SUCCESS);
export const getTestDataError = createAction(TYPES.GET_TEST_DATA_ERROR);
