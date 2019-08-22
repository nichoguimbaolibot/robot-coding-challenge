import { handleActions } from 'redux-actions';
import {
  getTestDataSuccess,
  getTestDataError,
  getTestDataLoading,
} from './test.actions';
import Model from './test.model';

interface ITestReducer {
  testData: object;
  loading: boolean;
}

interface IPayload {
  payload: object;
}

const onActionString = (action: any) => {
  return action.toString();
};

export default handleActions<ITestReducer, IPayload>(
  {
    [onActionString(getTestDataSuccess)]: (state: object, action: any) => ({
      ...state,
      testData: action.payload,
      loading: false,
    }),
    [onActionString(getTestDataLoading)]: state => ({
      ...state,
      loading: true,
    }),
    [onActionString(getTestDataError)]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
  },
  Model,
);
