import { spawn } from 'redux-saga/effects';

import getBanana from './sagas/get-banana';

export default function *assignmentsSaga() {
  yield spawn(getBanana);
}
