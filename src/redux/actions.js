import { createAction } from '@reduxjs/toolkit';
export const addContact = createAction('contact/addTask');
export const deleteContact = createAction('contact/deleteTask');
export const setFilter = createAction('filters/setSFilter');
