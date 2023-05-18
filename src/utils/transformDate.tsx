import React from 'react';

export const transformDate:React.FC<number> = (date) => {
  const time = '0' + date;

  return (
    <span>{time.slice(time.length - 2)}</span>
  )
}
