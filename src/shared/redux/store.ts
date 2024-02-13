import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
// import userReducer from '@/utils/redux/slices/userSlice';

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
//   user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];