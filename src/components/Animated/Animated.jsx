import React from 'react'
import PropTypes from 'prop-types'
import {
  ratDown,
  ratDownBlue,
  ratDownGreen,
  ratDownRed,
  ratLeft,
  ratLeftBlue,
  ratLeftGreen,
  ratLeftRed,
  ratRight,
  ratRightBlue,
  ratRightGreen,
  ratRightRed,
  ratUp,
  ratUpBlue,
  ratUpGreen,
  ratUpRed,
} from '@ratsprite'
import Spritesheet from '../Spritesheet'

function direction(orientation, variant) {
  switch (orientation) {
    case '^':
      switch (variant) {
        case 'green':
          return ratUpGreen
        case 'blue':
          return ratUpBlue
        case 'red':
          return ratUpRed
        default:
          return ratUp
      }
    case '>':
      switch (variant) {
        case 'green':
          return ratRightGreen
        case 'blue':
          return ratRightBlue
        case 'red':
          return ratRightRed
        default:
          return ratRight
      }
    case '<':
      switch (variant) {
        case 'green':
          return ratLeftGreen
        case 'blue':
          return ratLeftBlue
        case 'red':
          return ratLeftRed
        default:
          return ratLeft
      }
    default:
      switch (variant) {
        case 'green':
          return ratDownGreen
        case 'blue':
          return ratDownBlue
        case 'red':
          return ratDownRed
        default:
          return ratDown
      }
  }
}

const Animated = ({ orientation, animate, xPlayer, yPlayer, skin }) => {
  const sprite = direction(orientation, skin)

  return (
    <div
      style={{
        zIndex: '1',
        position: 'absolute',
        top: `${yPlayer * 30}px`,
        left: `${xPlayer * 30}px`,
        transition: 'top 0.5s ease-out, left 0.5s ease-out',
      }}
    >
      <Spritesheet
        image={sprite}
        widthFrame={32}
        heightFrame={32}
        steps={6}
        fps={16}
        isAnimating={animate}
      />
    </div>
  )
}

Animated.propTypes = {
  orientation: PropTypes.string,
  animate: PropTypes.bool,
  xPlayer: PropTypes.number,
  yPlayer: PropTypes.number,
  skin: PropTypes.string,
}

Animated.defaultProps = {
  orientation: 'v',
  animate: false,
  xPlayer: 1,
  yPlayer: 1,
  skin: '',
}

export default Animated
