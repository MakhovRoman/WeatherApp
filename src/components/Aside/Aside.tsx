import React from 'react';
import styles from './Aside.scss';
import { Clock } from '../UI/Clock/Clock';
import {WrapperContent} from '@typings/app.d'
import { Search } from '../UI/Search/Search';
import clsx from 'clsx';
import { Info } from '../UI/Info/Info';


export const Aside:React.FC<WrapperContent> = (props) => {
  return (
    <section className={clsx(props.className)}>
      <Search />
      <Info />
      <Clock />
    </section>
  )
}
