import React from 'react'
import './icon.less'
import PropTypes from 'prop-types'

const Icon = ({ children, name }) => {
  const nameClass = name ? ' icon_' + name : ''
  const iconClass = 'icon' + nameClass

  return <i className={iconClass}>{children}</i>
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Icon
