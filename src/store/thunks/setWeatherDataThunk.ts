import { weatherAPI } from "@src/services/API/weatherAPI"
import { setWeatherData } from "../slices/weatherDataSlice"

export const setWeatherDataThunk = (city: string) => {
  return (dispatch: any) => {
    weatherAPI.getWeather(city)
      .then((response) => dispatch(setWeatherData(response.current)))
  }
}
