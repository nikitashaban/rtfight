import React from 'react'
import './title.less'
import PropTypes from 'prop-types'

const Title = props => {
  const { type, size, color, shadow, children, weight, extraClass } = props
  const sizeClass = size ? ' title_size_' + size : ''
  const colorClass = color ? ' title_color_' + color : ''
  const shadowClass = shadow ? ' title_shadow_' + shadow : ''
  const weightClass = weight ? ' title_weight_' + weight : ''
  const extraClassCode = extraClass ? extraClass : ''
  const titleClass =
    'title' +
    sizeClass +
    colorClass +
    shadowClass +
    weightClass +
    ' ' +
    extraClassCode

  if (type === 'h1') {
    return (
      <header>
        <h1 className={titleClass}>{children}</h1>
      </header>
    )
  } else if (type === 'h2') {
    return (
      <header>
        <h2 className={titleClass}>{children}</h2>
      </header>
    )
  } else if (type === 'h3') {
    return (
      <header>
        <h3 className={titleClass}>{children}</h3>
      </header>
    )
  } else if (type === 'h4') {
    return (
      <header>
        <h4 className={titleClass}>{children}</h4>
      </header>
    )
  } else if (type === 'h5') {
    return (
      <header>
        <h5 className={titleClass}>{children}</h5>
      </header>
    )
  } else if (type === 'h6') {
    return (
      <header>
        <h6 className={titleClass}>{children}</h6>
      </header>
    )
  }
}

Title.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  shadow: PropTypes.string,
  weight: PropTypes.string,
  extraClass: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Title
