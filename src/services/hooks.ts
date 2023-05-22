import { setWeatherData } from "@src/store/slices/weatherDataSlice";
import { RootState } from "@src/store/store";
import { TCurrent } from "@typings/app";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { weatherAPI } from "./API/weatherAPI";

export const useFetching = (callback: Promise<Record<string, unknown>>) => {
  const fetching = async () => {
    try {
      await callback;
    } catch(err) {
      console.log(err);
    }
  }

  return fetching;
}

export type TCurrentData = {
  city: string,
}

export const useLoadCurrentata = (cityFromStore: string) => {
  useEffect(() => {
    weatherAPI.getWeather(cityFromStore)
      .then(response => {
        console.log(response.current);
        setWeatherData(response.current);
      })
  }, [cityFromStore])
}
