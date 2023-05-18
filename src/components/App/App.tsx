import React from 'react';
import { Aside } from '@components/Aside/Aside';
import { Main } from '@components/Main/Main';


import styles from './App.module.scss'
import 'normalize.css';

export const App:React.FC = () => {
  return (
    <main className={styles.wrapper}>
      <Aside className={[styles.wrapper_aside, styles.wrapper_item]}/>
      <Main className={[styles.wrapper_main, styles.wrapper_item]}/>
    </main>
  )
}
