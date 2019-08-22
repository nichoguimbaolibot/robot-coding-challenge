import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  takeUntil,
  map,
  startWith,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as TYPES from './test.types';
import {
  getTestDataSuccess,
  getTestDataLoading,
  getTestDataError,
} from './test.actions';

export const getTestDataEpic = (action$: any) =>
  action$.pipe(
    ofType(TYPES.GET_TEST_DATA_EPIC),
    switchMap(() =>
      ajax('https://jsonplaceholder.typicode.com/users').pipe(
        map(result => getTestDataSuccess(result.response)),
        takeUntil(action$.pipe(ofType(TYPES.GET_TEST_DATA_CANCEL))),
        catchError(error => of(getTestDataError(error))),
        startWith(getTestDataLoading('1')),
      ),
    ),
  );
