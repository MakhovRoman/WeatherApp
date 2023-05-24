import { Info, InfoWithErrorBoundary } from '@components/Info/Info';
import { Clock } from '@components/UI/Clock/Clock';
import { Search } from '@components/UI/Search/Search';
import {WrapperContent} from '@typings/app.d'
import clsx from 'clsx';
import React from 'react';

export const Aside:React.FC<WrapperContent> = (props) => {
  return (
    <aside className={clsx(props.className)}>
      <Search />
      <InfoWithErrorBoundary />
      <Clock />
    </aside>
  )
}
