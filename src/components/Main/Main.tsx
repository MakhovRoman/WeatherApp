import { Header } from '@components/Header/Header';
import { RootState } from '@src/store/store';
import { TWeatherData, WrapperContent } from '@typings/app';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

import { Forecast } from '../Forecast/Forecast';
import { WeatherDisplay, WeatherDisplaySize } from '../UI/WeatherDisplay/WeatherDisplay';

export const Main: React.FC<WrapperContent> = (props) => {
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading);
  const weatherData:TWeatherData = useSelector((state: RootState) => state.weatherData.weatherData);
  console.log(weatherData)
  return (
    <section className={clsx(props.className)}>
      <Header />
      {
        !isLoading &&
        <>
        <WeatherDisplay
          size={WeatherDisplaySize.LARGE}
          data={weatherData}
        />
        <Forecast />
        </>
      }

    </section>
  )
}
