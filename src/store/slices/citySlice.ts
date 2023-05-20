import { createSlice } from '@reduxjs/toolkit';

export const citySlice = createSlice({
  name: 'city',
  initialState: {
    city: sessionStorage.getItem('city') || 'Stavropol',
  },
  reducers: {
    enterCityName: (state, action) => {
      const city = action.payload;
      state.city = city;
    },
  },
});

export default citySlice.reducer;
export const { enterCityName } = citySlice.actions;
