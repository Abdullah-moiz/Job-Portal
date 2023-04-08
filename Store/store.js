import { configureStore } from '@reduxjs/toolkit'
import { UserReducer  } from '@/Utils/UserSlice'
import { JobReducer } from '@/Utils/JobSlice'
import { AppliedJobReducer } from '@/Utils/AppliedJobSlice'

export const store = configureStore({
  reducer: {
    User: UserReducer, // UserReducer is a function that returns a slice of state
    Job : JobReducer, // JobReducer is a function that returns a slice of state
    AppliedJob : AppliedJobReducer, // AppliedJobReducer is a function that returns a slice of state
  },
})