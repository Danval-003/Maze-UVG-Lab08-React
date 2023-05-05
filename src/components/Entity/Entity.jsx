import React from 'react'
import PropTypes from 'prop-types'
import MOSAIC_TYPES from './MOSAIC_TYPES'
import {
  entityContainer,
  entityContainerStanding,
  entityContainerLyingDown,
  entityContainerLap,
  entityContainerPlayer,
  mosaicFloor,
  mosaicWall,
  mosaicPlayer,
  down,
} from './Entity.module.css'

function typeContainer(text) {
  if (text === MOSAIC_TYPES.STANDING) {
    return entityContainerStanding
  }
  if (text === MOSAIC_TYPES.LYINGDOWN) {
    return entityContainerLyingDown
  }
  if (text === MOSAIC_TYPES.INTERSECTION) {
    return entityContainerLap
  }

  if (text === MOSAIC_TYPES.PLAYER) {
    return entityContainerPlayer
  }

  return entityContainer
}

const Entity = ({ type, next, typeStand, orientation }) => {
  const list = []
  const style = typeContainer(type)
  const arrow = () => {
    switch (orientation) {
      case MOSAIC_TYPES.ORIENTATION_DOWN:
        return down
      default:
        break
    }
    return down
  }
  switch (type) {
    case MOSAIC_TYPES.PLAYER:
      list.push(`${mosaicPlayer} ${arrow}`)
      break
    case MOSAIC_TYPES.STANDING:
      list.push(mosaicFloor, mosaicWall, mosaicFloor)
      list.push(mosaicFloor, mosaicWall, mosaicFloor)
      list.push(mosaicFloor, mosaicWall, mosaicFloor)
      break
    case MOSAIC_TYPES.LYINGDOWN:
      list.push(mosaicFloor, mosaicFloor, mosaicFloor)
      list.push(mosaicWall, mosaicWall, mosaicWall)
      list.push(mosaicFloor, mosaicFloor, mosaicFloor)
      break
    case MOSAIC_TYPES.INTERSECTION:
      if (typeStand.charAt(0) === MOSAIC_TYPES.STANDING) {
        list.push(mosaicFloor, mosaicWall, mosaicFloor)
      } else {
        list.push(mosaicFloor, mosaicFloor, mosaicFloor)
      }

      if (next.charAt(0) === MOSAIC_TYPES.HALFT_LYING) {
        list.push(mosaicWall, mosaicWall)
      } else {
        list.push(mosaicFloor, mosaicWall)
      }

      if (next.charAt(1) === MOSAIC_TYPES.HALFT_LYING) {
        list.push(mosaicWall)
      } else {
        list.push(mosaicFloor)
      }

      if (typeStand.charAt(1) === MOSAIC_TYPES.STANDING) {
        list.push(mosaicFloor, mosaicWall, mosaicFloor)
      } else {
        list.push(mosaicFloor, mosaicFloor, mosaicFloor)
      }
      break
    default:
      list.push(mosaicFloor)
  }

  return (
    <div>
      <div className={style}>
        {list.map(st => {
          return <div className={st} />
        })}
      </div>
    </div>
  )
}

Entity.propTypes = {
  type: PropTypes.string,
  next: PropTypes.string,
  typeStand: PropTypes.string,
  orientation: PropTypes.string,
}

Entity.defaultProps = {
  type: '',
  next: '',
  typeStand: ' |',
  orientation: '_',
}

export default Entity
