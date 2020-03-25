import React from 'react'
import './container.less'
import PropTypes from 'prop-types'

const Container = ({ children, type, extraClass }) => {
  const typeClass = type ? ' container_type_' + type : ''
  const containerClass = 'container ' + typeClass + extraClass

  return <div className={containerClass}>{children}</div>
}

Container.defaultProps = {
  extraClass: ''
}

Container.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Container
