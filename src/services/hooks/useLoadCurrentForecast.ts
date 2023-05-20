import { TCurrent } from "@typings/app";
import { useEffect, useState } from "react";
import { weatherAPI } from "../API/weatherAPI";

export type TCurrentForecastProps = {
  city: string,
}

export const useLoadCurrentForecast = (props: TCurrentForecastProps) => {
  const [imgURL, setImgURL] = useState<string>('');
  const [currentCity, setCurrentCity] = useState<TCurrent>({});

  useEffect(() => {
    weatherAPI.getWeather(props.city)
      .then(response => {
        console.log(response)
        setCurrentCity(response.current);
        setImgURL(response.current.condition.icon);
      })
  }, [props.city]);

  return [imgURL, currentCity];
}
