import React from 'react';

export const CurrentDate: React.FC = () => {
  const date = new Date();
  return (
    <div>
      {date.toLocaleDateString('en-GB')}
    </div>
  )
}
