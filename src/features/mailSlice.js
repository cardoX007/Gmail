import { createSlice } from '@reduxjs/toolkit';

//Redux helps with prop drilling for state management
// redux is a data layer that helps us pass our state across all components or the entire app


export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    sendMessageIsOpen: false,
   
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

  },

});

export const { openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;


export default mailSlice.reducer;
