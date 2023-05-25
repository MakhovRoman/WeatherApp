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
  const isInputError = useSelector((state: RootState) => state.isInputError.isInputError);

  return (
    <div className={styles.infoItem}>
      <h4 className={styles.infoItem_title}>
        {props.title}
      </h4>
      {!isInputError &&
        <span className={styles.infoItem_value}>
        {
          isLoading
          ?
          <LoaderInfoData />
          :
          props.value
        }
      </span>
      }

    </div>
  )
}
