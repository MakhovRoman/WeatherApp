import { createSlice } from "@reduxjs/toolkit";

export const isInputErrorSlice = createSlice({
  name: 'inputError',
  initialState: {
    isInputError: false,
  },
  reducers: {
    setIsInputError: (state, action) => {
      state.isInputError = action.payload;
    }
  }
});

export default isInputErrorSlice.reducer;
export const { setIsInputError } = isInputErrorSlice.actions;
