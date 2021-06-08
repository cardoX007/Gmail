import { createSlice } from '@reduxjs/toolkit';

//Redux helps with prop drilling for state management
// redux is a data layer that helps us pass our state across all components or the entire app


export const mailSlice = createSlice({
  name: 'mail',
  initialState : {
    sendMessageIsOpen: false,
   
  },
  reducers: {
    selectMail:(state, action)=>{
      state.selectedMail = action.payload;
    },
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },

  },

});

export const { selectMail, openSendMessage, closeSendMessage } = mailSlice.actions;


export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
