import React from "react";
import styles from './Loader.module.scss'

export const Loader: React.FC = () => {
  return (
    <div className={styles.lds_roller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
