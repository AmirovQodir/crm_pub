import { combineReducers } from '@reduxjs/toolkit';

import { meSlice } from '../features/auth/slices';

export const rootReducer = combineReducers({
  me: meSlice.reducer,
});
