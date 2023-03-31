import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    JobData:  null,
    matchingData : null, 
    myJobs : null,
}

export const jobSlice = createSlice({
  name: 'Job',
  initialState,
  reducers: {
    setJobData : (state, action) => {
        state.JobData = action.payload
    },
    setMatchingJobDat : (state , action) => {
      state.matchingData = action.payload
    },
    setMyJobs : (state , action) => {
      state.myJobs = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setJobData , setMatchingJobDat , setMyJobs } = jobSlice.actions

export const JobReducer =  jobSlice.reducer