import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './features/jobSlice';

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});

// Optional: Create and export RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
