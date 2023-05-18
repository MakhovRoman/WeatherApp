import { combineReducers } from "redux";
import counterSlice from "./slices/counterSlice";
import citySlice from "./slices/citySlice";

export const rootReducer = combineReducers({
  counter: counterSlice,
  city: citySlice
})
