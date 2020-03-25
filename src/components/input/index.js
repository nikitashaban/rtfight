import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../components/icon'
import Label from '../../components/label'

import './input.less'

const Input = props => {
  let {
    type,
    withIcon,
    icon,
    iconPosition,
    placeholder,
    label,
    name,
    styling,
    onChangeFunc,
    requiredInput
  } = props
  const typeClass = type ? ' input_type_' + type : ''
  const colorIcon = styling !== 'white' ? 'default' : styling
  const iconTag = withIcon ? (
    <Icon name={icon} type={'default'} size={'default'} color={colorIcon} />
  ) : (
    ''
  )

  const labelContent = label ? (
    <Label idElement={name} text={label} styling={'default'} />
  ) : (
    ''
  )
  const inputClassLabel = label ? ' input_with-label' : ''
  const inputClassIcon = withIcon ? ' input_with-icon' : ''
  const inputClassIconPosition = iconPosition
    ? ' input_with-icon_position_' + iconPosition
    : ''
  const inputClassStyle = styling ? ' input_styling_' + styling : ''
  const inputClass =
    'input' +
    typeClass +
    inputClassIcon +
    inputClassLabel +
    inputClassStyle +
    inputClassIconPosition
  const requiredInputStatus = requiredInput ? requiredInput : true
  return (
    <div className={inputClass}>
      {labelContent}
      {iconTag}
      <input
        type={type}
        className="input__element"
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChangeFunc}
        required={requiredInputStatus}
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  withIcon: PropTypes.bool,
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string,
  styling: PropTypes.string,
  requiredInput: PropTypes.bool
}

export default Input
