import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const tasksInitialState = [];

export const contactsReducer = createReducer(tasksInitialState, {
  [addContact]: (state, action) => {},
  [deleteContact]: (state, action) => {},
}); 

const filtersInitialState = '';

export const filtersReducer = createReducer(filtersInitialState, {
  [setFilter]: (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  },
});