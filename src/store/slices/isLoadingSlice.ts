import { createSlice } from "@reduxjs/toolkit";

export const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
});

export default isLoadingSlice.reducer;
export const { setIsLoading } = isLoadingSlice.actions
