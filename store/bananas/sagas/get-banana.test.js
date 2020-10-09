import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';

import { harvestBanana } from './get-banana';
import api from '../../../api';
import { actions as bananasActions } from '../slice';

const harvester = 'Diego Andai'

describe('getBanana', () => {
  it('calls api', () => expectSaga(harvestBanana, { payload: {  harvester } })
    .provide([
      [matchers.call.fn(api.checkKnown), { known: true }],
    ])
    .call(api.checkKnown, harvester)
    .run()
  )

  it('ends correctly on error', () => expectSaga(harvestBanana, { payload: {  harvester } })
    .provide([
      [matchers.call.fn(api.checkKnown), throwError(new Error())],
    ])
    .put(bananasActions.harvestError())
    .put(bananasActions.harvestEnded())
    .run()
  )
})