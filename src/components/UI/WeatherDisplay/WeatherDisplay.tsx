import { UnitConversion } from '@src/utils/unitConversion';
import { TWeatherData, TWeatherForecastData } from '@typings/app';
import clsx from 'clsx';
import React from 'react';

import styles from './WeatherDisplay.module.scss';

export enum WeatherDisplaySize {
  SMALL = 'small',
  LARGE = 'large'
}

export type TWeatherDataProps = {
  size: WeatherDisplaySize.SMALL | WeatherDisplaySize.LARGE,
  data: TWeatherData | TWeatherForecastData;
}

export const WeatherDisplay: React.FC<TWeatherDataProps> = (props) => {
  const isLarge =  props.size == WeatherDisplaySize.LARGE;

  return (
    <div className={styles.displayWeather}>
          <div className={clsx({
            [styles.displayWeather_picture_large]: isLarge,
            [styles.displayWeather_picture_small]: !isLarge,
          })}>
            <img
              src={
                isLarge
                ?
                props.data.current.condition.icon
                :
                props.data.day.condition.icon
              }
              alt="weather picture"
            />
          </div>
          <div className={clsx({
            [styles.displayWeather_temp]: true,
            [styles.displayWeather_temp_large]: isLarge,
            [styles.displayWeather_temp_small]: !isLarge,
          })}>
            {
              isLarge
              ?
              <>
                {Math.round(props.data.current.temp_c) + ' ℃'}
                <span>{props.data.current.condition.text.toUpperCase()}</span>
              </>
              :
              <>
                {Math.round(props.data.day.avgtemp_c) + ' ℃'}
                <span>{UnitConversion.date(props.data.date)}</span>
              </>
            }
          </div>
        </div>
  )
}
