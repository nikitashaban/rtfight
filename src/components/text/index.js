import React from 'react'
import './text.less'
import PropTypes from 'prop-types'

const Text = ({ children, color, size }) => {
  const colorClass = color ? ' text_color_' + color : ''
  const sizeClass = size ? ' text_size_' + size : ''
  const textClass = 'text' + colorClass + sizeClass
  return (
    <div className={textClass} dangerouslySetInnerHTML={{ __html: children }} />
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string
}

export default Text
