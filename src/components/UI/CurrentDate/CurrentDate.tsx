import React from 'react';

export const CurrentDate = () => {
  const date = new Date();
  return (
    <div>
      {date.toLocaleDateString('en-GB')}
    </div>
  )
}
