import { combineReducers } from "redux";

import citySlice from "./slices/citySlice";
import counterSlice from "./slices/counterSlice";
import isInputError from "./slices/isInputErrorSlice";
import isLoadingSlice from "./slices/isLoadingSlice";
import weatherDataSlice from "./slices/weatherDataSlice";


export const rootReducer = combineReducers({
  counter: counterSlice,
  city: citySlice,
  weatherData: weatherDataSlice,
  isLoading: isLoadingSlice,
  isInputError: isInputError,
})
