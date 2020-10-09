import { combineReducers } from '@reduxjs/toolkit';

import bananasSlice from './bananas/slice';

export default combineReducers({
  bananas: bananasSlice.reducer,
});
