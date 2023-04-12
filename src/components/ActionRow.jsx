import React from 'react'

const ActionRow = ( {activateAction, resetClicked, currentAction} ) => {
  return (
    <div className='actions-container'>
        <button className='button' onClick={activateAction}>{currentAction}</button>
        <button className='button' onClick={resetClicked}>Reset</button>
    </div>
  )
}

export default ActionRow