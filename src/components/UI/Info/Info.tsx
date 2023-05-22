import { RootState } from '@src/store/store';
import { UnitConversion } from '@src/utils/unitConversion';
import React from 'react';
import { useSelector } from 'react-redux';

import { InfoItem } from '../InfoItem/InfoItem';
import styles from './Info.module.scss';

export const Info: React.FC = () => {
  const weatherData:Record<string, string | number> = useSelector((state: RootState) => state.weatherData.weatherData)

  return (
    <div className={styles.info}>
      <div id='humidity'>
        <InfoItem
          title='Влажность'
          value={weatherData.humidity + ' %'}
        />
        <InfoItem
          title='Ветер'
          value={UnitConversion.windVelocity(weatherData.wind_kph as number) + ' м/с'}
        />
        <InfoItem
          title='Давление'
          value={UnitConversion.pressure(weatherData.pressure_mb as number) + ' мм рт. ст.'}
        />
      </div>
    </div>
  )
}
