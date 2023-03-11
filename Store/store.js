import { configureStore } from '@reduxjs/toolkit'
import { UserReducer  } from '@/Utils/UserSlice'
import { JobReducer } from '@/Utils/JobSlice'

export const store = configureStore({
  reducer: {
    User: UserReducer,
    Job : JobReducer,
  },
})