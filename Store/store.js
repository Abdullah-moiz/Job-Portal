import { configureStore } from '@reduxjs/toolkit'
import { UserReducer  } from '@/Utils/UserSlice'
import { JobReducer } from '@/Utils/JobSlice'
import { AppliedJobReducer } from '@/Utils/AppliedJobSlice'

export const store = configureStore({
  reducer: {
    User: UserReducer,
    Job : JobReducer,
    AppliedJob : AppliedJobReducer,
  },
})