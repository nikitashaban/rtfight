import React from 'react'
import './logo.less'
import PropTypes from 'prop-types'

const Logo = props => {
  const { type } = props
  const typeClass = type ? ' logo_type_' + type : ''
  const logoClass = 'logo' + typeClass
  return <div className={logoClass} />
}

Logo.propTypes = {
  type: PropTypes.string
}

export default Logo
