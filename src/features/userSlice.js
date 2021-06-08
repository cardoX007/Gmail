import { createSlice } from '@reduxjs/toolkit';

//Redux helps with prop drilling for state management
// redux is a data layer that helps us pass our state across all components or the entire app


export const userSlice = createSlice({
  name: 'user',
  initialState : {
    user: null
   
  },
  reducers: {
    login:(state, action)=>{
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
   
    },

  },

});

export const { login, logout,  } = userSlice.actions;



export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
