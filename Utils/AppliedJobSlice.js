import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   appliedJob : [],
   bookMark : [],
}

export const appliedJobSlice = createSlice({
  name: 'AppliedJob',
  initialState,
  reducers: {
    setAppliedJob : (state, action) => {
        state.appliedJob = action.payload
    },
    setBookMark : (state , action) => {
      state.bookMark = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAppliedJob  , setBookMark} = appliedJobSlice.actions

export const AppliedJobReducer =  appliedJobSlice.reducer