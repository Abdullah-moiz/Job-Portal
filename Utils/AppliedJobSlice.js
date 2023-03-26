import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   appliedJob : [], 
}

export const appliedJobSlice = createSlice({
  name: 'AppliedJob',
  initialState,
  reducers: {
    setAppliedJob : (state, action) => {
        state.appliedJob = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAppliedJob } = appliedJobSlice.actions

export const AppliedJobReducer =  appliedJobSlice.reducer