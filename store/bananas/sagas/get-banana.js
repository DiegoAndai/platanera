import { put, takeLatest } from 'redux-saga/effects';

import { actions as bananaActions } from '../slice';

function *harvestBanana({ payload }) {
  const { harvester } = payload;
  yield put(bananaActions.harvestStart());
  // api call
  yield put(bananaActions.harvestFailure());
  yield put(bananaActions.harvestEnded());
}

export default function *getBananaSaga() {
  yield takeLatest('bananas/harvestBanana', harvestBanana);
}
