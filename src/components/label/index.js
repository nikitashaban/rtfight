import React from 'react'
import PropTypes from 'prop-types'

import './label.less'

const Label = ({ text, idElement, styling }) => {
  const labelClassStyle = styling ? ' label_styling_' + styling : ''
  const labelClass = 'label' + labelClassStyle
  return (
    <label className={labelClass} htmlFor={idElement}>
      {text}
    </label>
  )
}

Label.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  idElement: PropTypes.string.isRequired,
  styling: PropTypes.string
}

export default Label
