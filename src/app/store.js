import { configureStore } from '@reduxjs/toolkit';
import mailReducer from '../features/mailSlice';
import userReduer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReduer,
  },
});
