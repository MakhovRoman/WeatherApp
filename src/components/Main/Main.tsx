import { Header } from '@components/Header/Header';
import { Loader } from '@src/components/UI/Loader/Loader';
import { useLoadCurrentForecast } from '@src/services/hooks/useLoadCurrentForecast';
import { RootState } from '@src/store/store';
import { WrapperContent } from '@typings/app';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';

export const Main: React.FC<WrapperContent> = (props) => {
  const city = useSelector((state: RootState) => state.city.city);
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading);
  const [imgURL, currentCity] = useLoadCurrentForecast({
    city
  })

  return (
    <section className={clsx(props.className)}>
      <Header />
      {
        isLoading
        ?
        <Loader />
        :
        <div>
          <img src={imgURL} alt="" width={100} height={100}/>
          {currentCity.temp_c}
        </div>
      }
    </section>
  )
}
