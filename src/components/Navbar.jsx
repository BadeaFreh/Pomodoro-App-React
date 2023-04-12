import React from 'react'

const Navbar = ( {changeMode} ) => {
  return (
    <div className='nav-container'>
        <button className='button work-btn' onClick={() => changeMode('work')}>Work Mode</button>
        <button className='button break-btn' onClick={() => changeMode('break')}>Break Mode</button>
    </div>
  )
}

export default Navbar
