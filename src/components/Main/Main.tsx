import { Header } from '@components/Header/Header';
import { RootState } from '@src/store/store';
import { TWeatherData, WrapperContent } from '@typings/app';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Main.module.scss'

export const Main: React.FC<WrapperContent> = (props) => {
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading);
  const weatherData:TWeatherData = useSelector((state: RootState) => state.weatherData.weatherData);
  console.log(weatherData)
  return (
    <section className={clsx(props.className)}>
      <Header />
      {
        !isLoading &&
        <div className={styles.mainWeatherData}>
          <div className={styles.mainWeatherData_Picture}>
            <img src={weatherData.current.condition.icon} alt="weather picture" />
          </div>
          <div className={styles.mainWeatherData_Temp}>
            {Math.round(weatherData.current.temp_c) + ' ℃'}
            <span>{weatherData.current.condition.text.toUpperCase()}</span>
          </div>
        </div>
      }
    </section>
  )
}
