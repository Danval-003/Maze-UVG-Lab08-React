import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { timerContainer, timerDisplay } from './Timer.module.css'

const Timer = ({ time, onFinish }) => {
  const [seconds, setSeconds] = useState(time)

  useEffect(() => {
    let intervalId = null

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1)
      }, 1000)
    } else {
      onFinish()
    }

    return () => clearInterval(intervalId)
  }, [seconds, onFinish])

  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  return (
    <div className={timerContainer}>
      <div className={timerDisplay}>
        {minutes}:{remainingSeconds < 10 ? '0' : ''}
        {remainingSeconds}
      </div>
    </div>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired,
  onFinish: PropTypes.func.isRequired,
}

export default Timer
