import { combineReducers } from '@reduxjs/toolkit';
import defectsReducer from './slices/defectsSlice';

const rootReducer = combineReducers({
  defects: defectsReducer, // Add reducers here
});

export default rootReducer;
