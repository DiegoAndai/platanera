import { spawn } from 'redux-saga/effects';

import bananasSaga from './bananas/saga';

export default function *rootSaga() {
  yield spawn(bananasSaga);
}
