import React from 'react';
import styles from './InfoItem.module.scss';

export type TInfoItem = {
  title: string,
  value: string | number,
}

export const InfoItem:React.FC<TInfoItem> = (props) => {
  return (
    <div className={styles.info_item}>
      <h4 className={styles.info_item_title}>
        {props.title}
      </h4>
      <span className={styles.info_item_value}>
        {props.value}
      </span>
    </div>
  )
}
