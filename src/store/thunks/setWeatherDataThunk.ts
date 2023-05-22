import { weatherAPI } from "@src/services/API/weatherAPI"

import { setIsLoading } from "../slices/isLoadingSlice"
import { setWeatherData } from "../slices/weatherDataSlice"

export const setWeatherDataThunk = (city: string) => {
  return (dispatch: any) => {
    dispatch(setIsLoading(true));
    weatherAPI.getWeather(city)
      .then((response) => dispatch(setWeatherData(response.current)))
      .then((response) => dispatch(setIsLoading(false)))
  }
}
