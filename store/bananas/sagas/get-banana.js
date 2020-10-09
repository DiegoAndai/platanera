import { call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../api';

import { actions as bananaActions } from '../slice';

function *harvestBanana({ payload }) {
  const { harvester } = payload;
  yield put(bananaActions.harvestStart());
  const { data: { known } } = yield call(api.checkKnown, harvester);
  if (known) {
    yield put(bananaActions.harvestSuccess());
    yield put(bananaActions.addBanana());
  } else {
    yield put(bananaActions.harvestFailure());
  }
  yield put(bananaActions.harvestEnded());
}

export default function *getBananaSaga() {
  yield takeLatest('bananas/harvestBanana', harvestBanana);
}
