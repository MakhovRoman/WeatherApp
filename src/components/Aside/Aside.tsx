import {WrapperContent} from '@typings/app.d'
import clsx from 'clsx';
import React from 'react';

import { Clock } from '../UI/Clock/Clock';
import { Info } from '../UI/Info/Info';
import { Search } from '../UI/Search/Search';
import styles from './Aside.scss';


export const Aside:React.FC<WrapperContent> = (props) => {


  return (
    <aside className={clsx(props.className)}>
      <Search />
      <Info />
      <Clock />
    </aside>
  )
}
