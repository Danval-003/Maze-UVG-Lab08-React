import React, { useEffect } from 'react'
import './StartPage.css'
import {
  PixelButton,
  Pills,
  Dropdown,
  NumericalInput,
  CheckboxList,
} from '@components'
import { Link } from 'react-router-dom'
import { useStoreon } from 'storeon/react'

const StartPage = () => {
  const { config, dispatch } = useStoreon('config')

  const changeTime = value => {
    dispatch('config/set', { key: 'time', value: value.length === 1 })
  }

  useEffect(() => changeTime([]), [])

  return (
    <div className='gameContainer'>
      <h1>THE MAZE</h1>
      <h1>UVG</h1>
      <div className='formContainer'>
        <div className='sizeContainer'>
          Ancho
          <NumericalInput
            max={25}
            min={4}
            onChange={value => dispatch('config/set', { key: 'width', value })}
            value={config.width}
          />
          Altura
          <NumericalInput
            max={25}
            min={4}
            onChange={value => dispatch('config/set', { key: 'height', value })}
            value={config.height}
          />
        </div>
        Labyrinth Theme
        <Pills
          options={['Ice', 'Fire', 'Sand']}
          setSelectable={value =>
            dispatch('config/set', { key: 'theme', value: value.toLowerCase() })
          }
          widht={400}
        />
        Player Skin
        <Dropdown
          options={['None', 'Green', 'Blue', 'Red']}
          setSelect={value =>
            dispatch('config/set', { key: 'skin', value: value.toLowerCase() })
          }
        />
        Tiempo?
        <CheckboxList
          onChange={value => changeTime(value)}
          options={['Con tiempo']}
        />
        {config.time ? (
          <div>
            <span>Segundos:</span>
            <NumericalInput
              max={300}
              min={0}
              onChange={value =>
                dispatch('config/set', { key: 'timer', value })
              }
              value={config.timer}
            />
          </div>
        ) : null}
      </div>
      <div
        style={{
          display: 'flex',
          margin: '10px 0px',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Link to='/LP'>
          <PixelButton action={() => {}} label='Iniciar' />
        </Link>
      </div>
    </div>
  )
}

export default StartPage
