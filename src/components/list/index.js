import React from 'react'
import './list.less'
import PropTypes from 'prop-types'

const List = ({ items, type, extraClass }) => {
  const typeClass = type ? ' list_type_' + type : ''
  const extraClassCode = extraClass ? extraClass : ''
  const listArray = items
    ? items.map((element, index) => {
        if (element) {
          return (
            <li key={index} className="list__item">
              {element}
            </li>
          )
        } else {
          return ''
        }
      })
    : ''
  const listClass = 'list' + typeClass + ' ' + extraClassCode

  return <ul className={listClass}>{listArray}</ul>
}

List.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
  extraClass: PropTypes.string
}

export default List
