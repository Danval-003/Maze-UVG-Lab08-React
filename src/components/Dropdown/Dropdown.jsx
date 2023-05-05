import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './Dropdown.css'

const Dropdown = ({ options, setSelect }) => {
  const [selectedOption, setSelectedOption] = useState(options[0])

  function handleSelectChange(event) {
    setSelectedOption(event.target.value)
    setSelect(event.target.value)
  }

  return (
    <div className='dropdown'>
      <select
        className='dropdown-select'
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className='dropdown-arrow' />
    </div>
  )
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  setSelect: PropTypes.func,
}

Dropdown.defaultProps = {
  options: ['', 'green', 'blue', 'red'],
  setSelect: () => {},
}
export default Dropdown
