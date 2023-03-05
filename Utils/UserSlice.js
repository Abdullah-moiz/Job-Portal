import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData : (state, action) => {
        state.userData = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUserData } = userSlice.actions

export const UserReducer =  userSlice.reducer