import React, { useState } from 'react'
import PropTypes from 'prop-types'
import PixelButton from '../PixelButton/PixelButton'

const Pills = ({ options, setSelectable, widht }) => {
  const x = options.length
  const [selecIndex, setSelectIndex] = useState(0)

  const proportion = widht / (220 * x)
  const height = 80 * proportion

  const handleSelection = (selection, index) => {
    setSelectable(selection)
    setSelectIndex(index)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: `${widht}px`,
        height: `${height}px`,
      }}
    >
      {options.map((labelOption, index) => (
        <PixelButton
          label={labelOption}
          action={() => handleSelection(labelOption, index)}
          isActive={selecIndex === index}
          size={proportion}
        />
      ))}
    </div>
  )
}

Pills.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectable: PropTypes.func.isRequired,
  widht: PropTypes.number.isRequired,
}

export default Pills
