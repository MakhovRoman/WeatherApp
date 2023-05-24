import { weatherAPI } from "@src/services/API/weatherAPI"

import { setIsLoading } from "../slices/isLoadingSlice"
import { setWeatherData } from "../slices/weatherDataSlice"

export const setWeatherDataThunk = (city: string) => {
  return (dispatch: any) => {
    dispatch(setIsLoading(true));
    weatherAPI.getWeather(city)
      .then((response) => {
        console.log(response);

        dispatch(setWeatherData(response))
      })
      .then(() => dispatch(setIsLoading(false)))
  }
}
