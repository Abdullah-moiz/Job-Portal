import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from '@/Utils/UserSlice'

export const store = configureStore({
  reducer: {
    User: UserReducer,
  },
})