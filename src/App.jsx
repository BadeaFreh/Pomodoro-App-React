import React, { useEffect, useState } from 'react'
import ActionRow from './components/ActionRow'
import Clock from './components/Clock'
import Navbar from './components/Navbar'
import sound from './audio-files/success.mp3'

const App = () => {

  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [shouldStop, setShouldStop] = useState(false)

  useEffect(() => {
    if (shouldStop) {
      let successRingtone = new Audio(sound)
      successRingtone.play()
      reset()
    }
  }, [shouldStop])

  function start() {
    setIsActive(true)
    setTimer(setInterval(tick, 1000))
  }
  
  function tick() {
    setSeconds(prevSeconds => {
      if (prevSeconds === 0) {
        setMinutes(prevMinutes => {
          if (prevSeconds === 0 && prevMinutes === 0) {
            setShouldStop(prevShouldStop => !prevShouldStop)
          }
          return prevMinutes - 1
        })
        return 59
      }
      return prevSeconds - 1
    })
  }

  function pause() {
    setMinutes(prevMinutes => prevMinutes)
    setSeconds(prevSeconds => prevSeconds)
    setIsActive(false)
    clearInterval(timer)
  }

  function reset() {
    setSeconds(0)
    setMinutes(25)
    setTimer(0)
    setIsActive(false)
    setShouldStop(false)
    clearInterval(timer)
  }

  function changeMode(mode) {
    switch (mode) {
      case 'work':
        reset()
        setSeconds(0)
        setMinutes(25)
        break
      case 'break':
        reset()
        setSeconds(0)
        setMinutes(15)
        break
    }
  }
  return (
    <>
      <Navbar 
        changeMode={changeMode}
      />
      <Clock 
        minutes={minutes < 10? '0' + minutes: minutes} 
        seconds={seconds < 10? '0' + seconds: seconds} 
      />
      <ActionRow 
        activateAction={isActive? pause: start} 
        currentAction={isActive? 'Pause': 'Start'} 
        resetClicked={reset}
      />
    </>
  )
}

export default App
