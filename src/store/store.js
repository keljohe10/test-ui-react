import { configureStore } from '@reduxjs/toolkit';
import celebritiesReducer from '../features/celebrities/celebrities';

export default configureStore({
  reducer: {
    celebrities: celebritiesReducer,
  },
});
