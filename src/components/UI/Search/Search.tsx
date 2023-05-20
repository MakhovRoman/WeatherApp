import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from './Search.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';
import { useDispatch } from 'react-redux';
import { enterCityName } from '@src/store/slices/citySlice';
import { setWeatherDataThunk } from '@src/store/thunks/setWeatherDataThunk';

export const Search: React.FC = () => {
  const [search, setSearch] = useState('');

  const city = useSelector((state: RootState) => state.city.city);
  const dispatch = useDispatch();

  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    event.preventDefault();
    setSearch(value);
  }

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem('city', search);

    dispatch(enterCityName(search));
    setSearch('');
  }

  useEffect(() => {
    console.log('search use effect')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dispatch(setWeatherDataThunk(city))
  }, [city])

  return (
    <form
      className={styles.wrapper}
      onSubmit={handlerSubmit}
    >
      <input
        className={styles.search}
        type="text"
        placeholder={city}
        value={search}
        onChange={handlerSearch}
      />
    </form>
  )
}
