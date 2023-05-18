import { TCurrent, WrapperContent } from '@typings/app';
import React, { useEffect, useState } from 'react';
import { Header } from '../Header/Header';
import { weatherAPI } from '@src/services/API/weatherAPI';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { useDispatch } from 'react-redux';
import { increment } from '@src/store/slices/counterSlice';

export const Main: React.FC<WrapperContent> = (props) => {
  const [current, setCurrent] = useState<TCurrent>({});
  const [imgURL, setImgURL] = useState<string>('');

  const count = useSelector((state: RootState) => state.counter.value);
  const city = useSelector((state: RootState) => state.city.city);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(city);

    weatherAPI.getWeather(city)
    .then(response => {
      console.log(response)
      setCurrent(response);
      setImgURL(response.condition.icon);
    })
  }, [city])

  return (
    <section className={clsx(props.className)}>
      <Header />
      Main content
      <div>
        <img src={imgURL} alt="" width={100} height={100}/>
        {current.temp_c}
      </div>
      <div>
        {count}
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
      </div>
    </section>
  )
}
