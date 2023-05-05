import React from 'react'
import PropTypes from 'prop-types'
import './NumericalInput.css'

const NumericalInput = ({ value, onChange, min, max }) => {
  const handleChange = event => {
    const newValue = parseInt(event.target.value, 10)
    if (newValue >= min && newValue <= max) {
      onChange(newValue)
    }
  }

  return (
    <input
      type='number'
      value={value}
      onChange={handleChange}
      min={min}
      max={max}
      className='numerical-input'
    />
  )
}

NumericalInput.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
}

export default NumericalInput
