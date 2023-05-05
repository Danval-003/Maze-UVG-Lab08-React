import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { textureFire, textureIce, textureSand } from '@texture'
import { cheeseVictory } from '@ratsprite'
import Entity from '../Entity/Entity'
import MOSAIC_TYPES from '../Entity/MOSAIC_TYPES'
import Animated from '../Animated/Animated'

const Labyrinth = ({ jsonMaze, win, setWin, skinV, theme }) => {
  const width = jsonMaze[0].length
  const widthContent = width * 30
  const height = jsonMaze.length
  const heightContent = height * 30
  const [direction, setDirection] = useState('v')
  const [playerX, setPlayerX] = useState(1)
  const [playerY, setPlayerY] = useState(1)
  const [inMove, setInMove] = useState(false)

  window.addEventListener(
    'keydown',
    event => {
      // Verifica si la tecla presionada fue una flecha
      if (
        ['ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'].indexOf(event.key) >
        -1
      ) {
        // Evita el comportamiento predeterminado de la flecha
        event.preventDefault()
      }
    },
    false,
  )

  useEffect(() => {
    if (jsonMaze[playerY][playerX] === MOSAIC_TYPES.GOAL) {
      setWin(true)
    }
  }, [playerX, playerY])

  const handleKeyDown = event => {
    if (!win) {
      // Si ya está en movimiento, ignoramos la tecla presionada
      if (inMove) return

      // Detectar la tecla presionada y mover al jugador en consecuencia
      switch (event.keyCode) {
        case 38: // Tecla de flecha hacia arriba
          setDirection('^')
          if (
            jsonMaze[playerY - 1][playerX] === MOSAIC_TYPES.DEFAULT ||
            jsonMaze[playerY - 1][playerX] === MOSAIC_TYPES.PLAYER ||
            jsonMaze[playerY - 1][playerX] === MOSAIC_TYPES.GOAL
          ) {
            setPlayerY(prevY => prevY - 1)
          }
          setInMove(true)
          setTimeout(() => setInMove(false), 500)
          break
        case 40: // Tecla de flecha hacia abajo
          setDirection('v')
          if (
            jsonMaze[playerY + 1][playerX] === MOSAIC_TYPES.DEFAULT ||
            jsonMaze[playerY + 1][playerX] === MOSAIC_TYPES.PLAYER ||
            jsonMaze[playerY + 1][playerX] === MOSAIC_TYPES.GOAL
          ) {
            setPlayerY(prevY => prevY + 1)
          }
          setInMove(true)
          setTimeout(() => setInMove(false), 500)
          break
        case 37: // Tecla de flecha hacia la izquierda
          setDirection('<')
          if (
            jsonMaze[playerY][playerX - 1] === MOSAIC_TYPES.DEFAULT ||
            jsonMaze[playerY][playerX - 1] === MOSAIC_TYPES.PLAYER ||
            jsonMaze[playerY][playerX - 1] === MOSAIC_TYPES.GOAL
          ) {
            setPlayerX(prevX => prevX - 1)
          }
          setInMove(true)
          setTimeout(() => setInMove(false), 500)
          break
        case 39: // Tecla de flecha hacia la derecha
          setDirection('>')
          if (
            jsonMaze[playerY][playerX + 1] === MOSAIC_TYPES.DEFAULT ||
            jsonMaze[playerY][playerX + 1] === MOSAIC_TYPES.PLAYER ||
            jsonMaze[playerY][playerX + 1] === MOSAIC_TYPES.GOAL
          ) {
            setPlayerX(prevX => prevX + 1)
          }
          setInMove(true)
          setTimeout(() => setInMove(false), 500)
          break
        default:
          break
      }
    }
  }

  useEffect(() => {
    // Agregar el evento de onKeyDown al cuerpo del documento
    document.body.addEventListener('keydown', handleKeyDown)

    // Eliminar el evento de onKeyDown cuando el componente se desmonta
    return () => {
      document.body.removeEventListener('keydown', handleKeyDown)
    }
  }, [inMove])

  const entities = jsonMaze.map((row, j) =>
    row.map((iterator, i) => {
      let up = ' '
      let down = ' '
      let right = ' '
      let left = ' '
      if (j < jsonMaze.length - 1) {
        up = jsonMaze[j + 1][i]
      }

      if (j > 0) {
        down = jsonMaze[j - 1][i]
      }

      if (i < row.length - 1) {
        right = row[i + 1]
      }

      if (i > 0) {
        left = row[i - 1]
      }

      if (iterator === MOSAIC_TYPES.PLAYER) {
        return (
          <Entity
            type=' '
            next={left + right}
            typeStand={down + up} // pasamos el objeto de estilo
          />
        )
      }

      return (
        <Entity
          type={iterator}
          next={left + right}
          typeStand={down + up} // pasamos el objeto de estilo
        />
      )
    }),
  )

  const LabyrinthTheme = () => {
    switch (theme) {
      case 'fire':
        return {
          position: 'relative',
          width: `${widthContent}px`,
          height: `${heightContent}px`,
          backgroundImage: `url(${textureFire})`,
        }
      case 'sand':
        return {
          position: 'relative',
          width: `${widthContent}px`,
          height: `${heightContent}px`,
          backgroundImage: `url(${textureSand})`,
        }
      case 'ice':
        return {
          position: 'relative',
          width: `${widthContent}px`,
          height: `${heightContent}px`,
          backgroundImage: `url(${textureIce})`,
        }
      default:
        break
    }
    return {
      position: 'relative',
      width: `${widthContent}px`,
      height: `${heightContent}px`,
      backgroundColor: 'rgb(255, 220, 149)',
    }
  }

  return (
    <div style={LabyrinthTheme()}>
      <Animated
        orientation={direction}
        xPlayer={playerX}
        yPlayer={playerY}
        animate={inMove}
        skin={skinV}
      />

      <div
        style={{
          width: `${widthContent}px`,
          height: `${heightContent}px`,
          position: 'absolute',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {entities}
      </div>
      <img
        src={cheeseVictory}
        alt='Queso de la victoria'
        style={{
          position: 'absolute',
          left: `${widthContent - 60}px`,
          top: `${heightContent - 60}px`,
        }}
      />
    </div>
  )
}

Labyrinth.propTypes = {
  jsonMaze: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  win: PropTypes.bool,
  setWin: PropTypes.func,
  skinV: PropTypes.string,
  theme: PropTypes.string,
}

Labyrinth.defaultProps = {
  win: false,
  setWin: () => {},
  skinV: '',
  theme: '',
}

export default Labyrinth
