import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  harvester: null,
  harvesterKnown: false,
  harvesting: false,
  error: false,
}

const slice = createSlice({
  name: 'bananas',
  initialState,
  reducers: {
    addBanana(state) {
      state.count += 1;
    },
    harvestBanana(state, action) {
      const { harvester } = action.payload;
      state.harvester = harvester;
    },
    harvestStart(state) {
      state.harvesterKnown = false;
      state.harvesting = true;
    },
    harvestSuccess(state) {
      state.harvesterKnown = true;
    },
    harvestFailure(state) {
      state.harvesterKnown = false;
    },
    harvestEnded(state) {
      state.harvesting = false;
    },
    harvestError(state) {
      state.error = true;
    },
    reset(state){
      state.harvester = null;
      state.harvesterKnown = false;
      state.harvesting = false;
      state.error = false;
    }
  },
});

export default slice;
export const actions = slice.actions;

