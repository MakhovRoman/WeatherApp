import React, { useEffect, useState } from "react";
import { weatherAPI } from "./API/weatherAPI";
import { TCurrent } from "@typings/app";
import { useSelector } from "react-redux";
import { RootState } from "@src/store/store";
import { setWeatherData } from "@src/store/slices/weatherDataSlice";

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
