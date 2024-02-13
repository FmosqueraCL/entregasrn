import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../features/auth/authSlice"
import { shopApi } from './services/shopServices'
import { authApi } from './services/auth'


export const store = configureStore({
  reducer: {
    auth:authReducer,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(shopApi.middleware,authApi.middleware),

})