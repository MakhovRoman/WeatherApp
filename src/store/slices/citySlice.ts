import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: 'Stavropol',
  },
  reducers: {
    enterCityName: (state, action) => {
      state.city = action.payload
    },
  },
});

export default citySlice.reducer;
export const { enterCityName } = citySlice.actions;
