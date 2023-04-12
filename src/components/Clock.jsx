import React from 'react'

const Clock = ( {minutes, seconds} ) => {
  return (
    <div className='clock-container'>
        <div className='clock'>{minutes}:{seconds}</div>
    </div>
  )
}

export default Clock