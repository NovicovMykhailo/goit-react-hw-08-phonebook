import shortid from 'shortid';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'Contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare: text => {
        return { payload: { id: shortid(), ...text } };
      },
    },

    deleteContact(state, action) {
      const index = state.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(index, 1);
    },
  },
});

//Persist

const persistConfig = {
  key: 'contacts',
  storage,
};


export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
