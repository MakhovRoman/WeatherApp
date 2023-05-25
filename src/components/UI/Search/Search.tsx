import { AppDispatch } from '@src/main';
import { enterCityName } from '@src/store/slices/citySlice';
import { setIsInputError } from '@src/store/slices/isInputErrorSlice';
import { RootState } from '@src/store/store';
import { setWeatherDataThunk } from '@src/store/thunks/setWeatherDataThunk';
import { parseSchema } from '@src/utils/parseSchema';
import { cityDTO } from '@src/utils/schema';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const [search, setSearch] = useState('');

  const city = useSelector((state: RootState) => state.city.city);
  const isInputError = useSelector((state: RootState) => state.isInputError.isInputError);
  const dispatch:AppDispatch = useDispatch();

  const handlerSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    event.preventDefault();

    setSearch(value);
  }

  const handlerSubmit = (event: FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem('city', search);

    if (isInputError) {
      dispatch(setIsInputError(false));
    }

    parseSchema(cityDTO, {title: search});

    dispatch(enterCityName(search));
    setSearch('');
  }

  useEffect(() => {
    console.log('search use effect')

    //в файле main.tsx добавлена типизация для dispatch
    dispatch(setWeatherDataThunk(city));
  }, [city, dispatch])

  return (
    <form
      className={styles.wrapper}
      onSubmit={handlerSubmit}
    >
      <input
        className={styles.search}
        type="text"
        placeholder={
          isInputError ? 'Enter the name of the city' : city
        }
        value={search}
        onChange={handlerSearch}
      />
    </form>
  )
}
