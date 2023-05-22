import { CurrentDate } from '@components/UI/CurrentDate/CurrentDate';
import { RootState } from '@src/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

import styles from './Header.module.scss'

export const Header:React.FC = () => {
  const city = useSelector((state: RootState) => state.city.city);

  return (
    <div className={styles.header}>
      <h2>
        {city}
      </h2>
      <CurrentDate />
    </div>
  )
}
