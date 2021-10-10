import { configureStore } from '@reduxjs/toolkit';
import { customSlice } from './features';

export default configureStore({
  reducer: {
    customer: customSlice.reducer,
  },
});
