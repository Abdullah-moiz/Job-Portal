import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    JobData:  null,
}

export const jobSlice = createSlice({
  name: 'Job',
  initialState,
  reducers: {
    setJobData : (state, action) => {
        state.JobData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setJobData } = jobSlice.actions

export const JobReducer =  jobSlice.reducer