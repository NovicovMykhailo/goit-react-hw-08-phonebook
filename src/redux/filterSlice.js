const { createSlice } = require("@reduxjs/toolkit");

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      state = action.payload;
    },
  },
});