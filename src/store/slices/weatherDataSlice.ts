import { createSlice } from "@reduxjs/toolkit";

export const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: {
    weatherData: {
      location: {},
      current: {},
      forecast: {}
    }
  },
  reducers: {
    setWeatherData: (state, action) => {
      console.log('set weather data')
      state.weatherData = action.payload;
    }
  },
});

export default weatherDataSlice.reducer;
export const { setWeatherData } = weatherDataSlice.actions;
