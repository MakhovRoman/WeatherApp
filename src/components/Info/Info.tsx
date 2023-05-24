import { InfoItem } from '@components/UI/InfoItem/InfoItem';
import { RootState } from '@src/store/store';
import { UnitConversion } from '@src/utils/unitConversion';
import { TWeatherData } from '@typings/app';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Info.module.scss';
import { withErrorBoundary } from '@src/hoc/withErrorBoundary';

export const Info: React.FC = () => {
  const weatherData:any = useSelector((state: RootState) => state.weatherData.weatherData)
  console.log(weatherData)

  return (
    <div className={styles.info}>
      <InfoItem
        title='Влажность'
        value={weatherData.current.humidity + ' %'}
      />
      <InfoItem
        title='Ветер'
        value={UnitConversion.windVelocity(weatherData.current.wind_kph as number) + ' м/с'}
      />
      <InfoItem
        title="Порывы"
        value={UnitConversion.windVelocity(weatherData.current.gust_kph as number)  + ' м/с'}
      />
      <InfoItem
        title='Направление ветра'
        value={weatherData.current.wind_dir}
      />
      <InfoItem
        title='Давление'
        value={UnitConversion.pressure(weatherData.current.pressure_mb as number) + ' мм рт. ст.'}
      />
    </div>
  )
}


export const InfoWithErrorBoundary = withErrorBoundary(Info);
