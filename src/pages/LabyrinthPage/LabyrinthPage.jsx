import React, { useEffect, useState } from 'react'
import { useStoreon } from 'storeon/react'
import './LabyrinthPage.css'
import useMazeApi from '@hooks'
import { Labyrinth, Modal, Timer } from '@components'

const LabyrinthPage = () => {
  const { config } = useStoreon('config')
  const [isWin, setIsWin] = useState(false)
  const [timeOff, setTimeOff] = useState(false)
  const [start, setStart] = useState(true)
  const [response, loading, handleRequest] = useMazeApi()

  useEffect(() => {
    if (loading) {
      setStart(!start)
    }
  }, [loading])

  useEffect(() => {
    handleRequest(config.width, config.height)
  }, [])

  return (
    <div>
      <Modal
        show={loading || isWin || timeOff}
        loading={loading}
        victory={isWin}
      />
      {config.time ? (
        <div className='timerComponent'>
          <Timer time={config.timer} onFinish={() => setTimeOff(true)} />
        </div>
      ) : null}
      {loading || start ? null : (
        <div>
          <Labyrinth
            jsonMaze={response}
            win={timeOff}
            setWin={value => {
              setIsWin(value)
              setTimeOff(value)
            }}
            skinV={config.skin}
            theme={config.theme}
          />
        </div>
      )}
    </div>
  )
}

export default LabyrinthPage
