import React from 'react'
import PropTypes from 'prop-types'
import './PixelButton.css'

const PixelButton = ({ label, action, isActive, size }) => {
  const colorAct = isActive ? '#408e60' : '#000000'
  const width = size * 200
  const height = size * 70
  const fontSize = size * 1.2

  return (
    <div className='containButton' style={{ marginRight: `${width + 1}px` }}>
      <button
        className='startButton'
        type='button'
        onClick={action}
        style={{
          backgroundColor: colorAct,
          width: `${width}px`,
          height: `${height}px`,
          fontSize: `${fontSize}em`,
        }}
      >
        {label}
      </button>
    </div>
  )
}

PixelButton.propTypes = {
  label: PropTypes.string,
  action: PropTypes.func,
  isActive: PropTypes.bool,
  size: PropTypes.number,
}

PixelButton.defaultProps = {
  label: '',
  action: () => {},
  isActive: false,
  size: 1,
}

export default PixelButton
