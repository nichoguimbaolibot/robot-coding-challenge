import { combineEpics } from 'redux-observable';
import { getTestDataEpic } from './test/test.epics';

const rootEpic = combineEpics<any>(getTestDataEpic);

export default rootEpic;
