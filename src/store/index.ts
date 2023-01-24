import { configureStore } from '@reduxjs/toolkit';
import { api, tokenApi } from 'api';
import devToolsEnhancer from 'remote-redux-devtools';
import authReducer from './auth/authSlice';

const rootReducer = {
  auth: authReducer,
  [api.reducerPath]: api.reducer,
  [tokenApi.reducerPath]: tokenApi.reducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: false,
  enhancers: [devToolsEnhancer({ realtime: true, port: 8000 })],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware, tokenApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
