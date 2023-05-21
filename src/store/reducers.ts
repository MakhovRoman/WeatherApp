import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import citySlice from "./slices/citySlice";
import weatherDataSlice from "./slices/weatherDataSlice";
import isLoadingSlice from "./slices/isLoadingSlice";


export const rootReducer = combineReducers({
  counter: counterSlice,
  city: citySlice,
  weatherData: weatherDataSlice,
  isLoading: isLoadingSlice,
})
