import React, { useEffect } from 'react';
import { Aside } from '@components/Aside/Aside';
import { Main } from '@components/Main/Main';


import styles from './App.module.scss'
import 'normalize.css';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { useDispatch } from 'react-redux';
import { setWeatherData } from '@src/store/slices/weatherDataSlice';
import { weatherAPI } from '@src/services/API/weatherAPI';
import { useLoadCurrentata } from '@src/services/hooks';

export const App:React.FC = () => {
  const city = useSelector((state: RootState) => state.city.city)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   weatherAPI.getWeather(city)
  //     .then((response) => dispatch(setWeatherData(response.current)))
  // }, [city])

  return (
    <main className={styles.wrapper}>
      <Aside className={[styles.wrapper_aside, styles.wrapper_item]}/>
      <Main className={[styles.wrapper_main, styles.wrapper_item]}/>
    </main>
  )
}
