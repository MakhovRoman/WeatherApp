import { weatherAPI } from "@src/services/API/weatherAPI"
import { AnyAction, Dispatch } from "redux"

import { setIsInputError } from "../slices/isInputErrorSlice"
import { setIsLoading } from "../slices/isLoadingSlice"
import { setWeatherData } from "../slices/weatherDataSlice"

export const setWeatherDataThunk = (city: string) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch(setIsLoading(true));
    weatherAPI.getWeather(city)
      .then((response) => {
        dispatch(setWeatherData(response)),
        dispatch(setIsInputError(false))
      })
      .catch((err) => {
        console.log(err);

        dispatch(setIsInputError(true))
      })
      .then(() => {
        dispatch(setIsLoading(false));
      })
  }
}
