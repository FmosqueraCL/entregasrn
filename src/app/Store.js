import { configureStore } from '@reduxjs/toolkit'
import shopReducer from "../features/shop/shopSlice"
import profileReducer from '../features/users/userSlice'

export const store = configureStore({
  reducer: {
    shop:shopReducer,
    user:profileReducer,
  },
})