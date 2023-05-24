import 'normalize.css';

import { Aside } from '@components/Aside/Aside';
import { Main } from '@components/Main/Main';
import { RootState } from '@src/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

import { Loader } from '../UI/Loader/Loader';
import styles from './App.module.scss'

export const App:React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading);

  return (
    <main className={styles.wrapper}>
      <Aside className={[styles.wrapper_aside, styles.wrapper_item]}/>
      <Main className={[styles.wrapper_main, styles.wrapper_item]}/>

      {isLoading &&
        <div className={styles.wrapper_loader}>
          <Loader />
        </div>
      }
    </main>
  )
}
