import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Spritesheet = ({
  image,
  widthFrame,
  heightFrame,
  steps,
  fps,
  isAnimating = true,
}) => {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setFrameIndex(old => (old + 1) % steps)
      }, 1000 / fps)
      return () => clearInterval(interval)
    }
    return () => setFrameIndex(0)
  }, [isAnimating, steps, fps])

  const spriteStyle = {
    width: widthFrame,
    height: heightFrame,
    backgroundImage: `url(${image})`,
    backgroundPositionX: -(frameIndex * widthFrame),
  }

  return <div style={spriteStyle} />
}

Spritesheet.propTypes = {
  image: PropTypes.string.isRequired,
  widthFrame: PropTypes.number.isRequired,
  heightFrame: PropTypes.number.isRequired,
  steps: PropTypes.number.isRequired,
  fps: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
}

Spritesheet.defaultProps = {
  isAnimating: true,
}

export default Spritesheet
