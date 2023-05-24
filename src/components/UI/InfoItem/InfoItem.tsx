import { RootState } from '@src/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

import { LoaderInfoData } from '../LoaderInfoData/LoaderInfoData';
import styles from './InfoItem.module.scss';

export type TInfoItem = {
  title: string,
  value: string | number ,
}

export const InfoItem:React.FC<TInfoItem> = (props) => {
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading)

  return (
    <div className={styles.infoItem}>
      <h4 className={styles.infoItem_title}>
        {props.title}
      </h4>
      <span className={styles.infoItem_value}>
        {
          isLoading
          ?
          <LoaderInfoData />
          :
          props.value
        }
      </span>
    </div>
  )
}
