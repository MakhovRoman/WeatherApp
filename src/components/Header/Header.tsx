import React from 'react';
import styles from './Header.module.scss'
import { CurrentDate } from '../UI/CurrentDate/CurrentDate';

export const Header:React.FC = () => {
  return (
    <div className={styles.header}>
      <span>Header</span>
      <CurrentDate />
    </div>
  )
}
