import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { checkboxList, checkmark } from './CheckboxList.module.css'

const CheckboxList = ({ options, onChange }) => {
  const [checkedItems, setCheckedItems] = useState([])

  useEffect(() => {
    onChange(checkedItems)
  }, [checkedItems])

  const handleChange = event => {
    const { value } = event.target
    const isChecked = event.target.checked

    if (isChecked) {
      setCheckedItems([...checkedItems, value])
    } else {
      setCheckedItems(checkedItems.filter(item => item !== value))
    }
  }

  return (
    <div className={checkboxList}>
      {options.map(option => (
        <label htmlFor={option}>
          <input
            type='checkbox'
            id={option}
            value={option}
            checked={checkedItems.includes(option)}
            onChange={handleChange}
          />
          <span className={checkmark} />
          {option}
        </label>
      ))}
    </div>
  )
}

CheckboxList.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
}

CheckboxList.defaultProps = {
  options: [],
}

export default CheckboxList
