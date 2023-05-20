import { TCurrent, WrapperContent } from '@typings/app';
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { weatherAPI } from '@src/services/API/weatherAPI';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { useDispatch } from 'react-redux';
import { increment } from '@src/store/slices/counterSlice';
import { useLoadCurrentata } from '@src/services/hooks';
import { useLoadCurrentForecast } from '@src/services/hooks/useLoadCurrentForecast';

export const Main: React.FC<WrapperContent> = (props) => {
  const city = useSelector((state: RootState) => state.city.city);

  // useEffect(() => {
  //   weatherAPI.getWeather(city)
  //   .then(response => {
  //     console.log(response)
  //     setCurrentCity(response.current);
  //     setImgURL(response.current.condition.icon);
  //   })
  // }, [city])

  const [imgURL, currentCity] = useLoadCurrentForecast({
    city
  })

  return (
    <section className={clsx(props.className)}>
      <Header />
      Main content
      <div>
        <img src={imgURL} alt="" width={100} height={100}/>
        {currentCity.temp_c}
      </div>
      {/* <div>
        {count}
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
      </div> */}
    </section>
  )
}
