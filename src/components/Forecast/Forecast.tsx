import { WeatherDisplay, WeatherDisplaySize } from '@components/UI/WeatherDisplay/WeatherDisplay';
import { RootState } from '@src/store/store';
import { TWeatherForecastData } from '@typings/app';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Forecast.module.scss';


export const Forecast:React.FC = () => {
  const forecastArray: Record<string, TWeatherForecastData> = useSelector((state: RootState) => state.weatherData.weatherData.forecast);

  return (
    <div className={styles.forecastWrapper}>
      {forecastArray.forecastday.map((item: TWeatherForecastData, index: number) =>
        <WeatherDisplay
          size={WeatherDisplaySize.SMALL}
          data={item}
          key={index}
        />
      )}
    </div>
  )
}
