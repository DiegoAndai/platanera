import { call, takeLatest } from 'redux-saga/effects';

function *harvestBanana(action) {
}

export default function *getBananaSaga() {
  yield takeLatest('bananas/harvestBanana', harvestBanana);
}
