import React from 'react';
import styles from './InfoItem.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store/store';

export type TInfoItem = {
  title: string,
  value: string | number,
}

export const InfoItem:React.FC<TInfoItem> = (props) => {
  const isLoading = useSelector((state: RootState) => state.isLoading.isLoading)

  return (
    <div className={styles.info_item}>
      <h4 className={styles.info_item_title}>
        {props.title}
      </h4>
      <span className={styles.info_item_value}>
        {
          isLoading
          ?
          '...'
          :
          props.value
        }
      </span>
    </div>
  )
}
