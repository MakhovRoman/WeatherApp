import React, { useState } from "react";
import styles from './Clock.module.scss'
import { transformDate } from "@utils/transformDate";

export const Clock: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  setInterval(() => setDate(new Date()), 1000);

  //не использую  date.toLocaleTimeSting чтобы рендер приходился на конкретный span, а не на весь div
  return (
    <div className={styles.clock}>
      {transformDate(date.getHours())}
      :
      {transformDate(date.getMinutes())}
      :
      {transformDate(date.getSeconds())}
    </div>
  )
}
