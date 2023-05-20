import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import citySlice from "./slices/citySlice";
import weatherDataSlice from "./slices/weatherDataSlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
  city: citySlice,
  weatherData: weatherDataSlice,
})