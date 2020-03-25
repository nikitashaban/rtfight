import React from 'react'
import './row.less'
import PropTypes from 'prop-types'

const Row = ({ children, column, extraClass }) => {
  const columnClass = column ? ' row_column_' + column : ''
  const extraClassCode = extraClass ? extraClass : ''
  const rowClass = 'row ' + extraClassCode + columnClass
  return <div className={rowClass}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.node.isRequired,
  column: PropTypes.string,
  extraClass: PropTypes.string
}

export default Row
