import React from 'react'
import './button.less'
import PropTypes from 'prop-types'
// import Popup from '../popup'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      popupOpen: false,
      reopen: false
    }
    this.clickPopupFunction = this.clickPopupFunction.bind(this)
  }

  clickPopupFunction = e => {
    e.preventDefault()

    this.setState({
      popupOpen: !this.state.popupOpen,
      reopen: true
    })
  }

  render() {
    const {
      children,
      type,
      color,
      background,
      size,
      extraClass,
      clickFunc,
      dataNavigationId,
      href,
      target,
      popup
      // popupId,
      // popupContentInside
    } = this.props
    const typeClass = type ? ' button_type_' + type : ''
    const colorClass = color ? ' button_color_' + color : ''
    const backgroundClass = background ? ' button_background_' + background : ''
    const sizeClass = size ? ' button_size_' + size : ''
    const extraClassCode = extraClass ? extraClass : ''
    const targetCode = target ? target : '_self'

    const buttonClickFunc = popup ? this.clickPopupFunction : clickFunc
    const buttonClass =
      'button' +
      typeClass +
      colorClass +
      backgroundClass +
      sizeClass +
      ' ' +
      extraClassCode
    let buttonContent = ''
    if (typeof children !== 'object') {
      buttonContent =
        type === 'link' ||
        type === 'link-button-rounded' ||
        type === 'bordered-link' ||
        type === 'fixed-link' ? (
          <a
            className={buttonClass}
            onClick={buttonClickFunc}
            data-navigation-id={dataNavigationId}
            href={href}
            target={targetCode}
            dangerouslySetInnerHTML={{ __html: children }}
          />
        ) : (
          <button
            className={buttonClass}
            onClick={buttonClickFunc}
            data-navigation-id={dataNavigationId}
            dangerouslySetInnerHTML={{ __html: children }}
          />
        )
    } else {
      buttonContent =
        type === 'link' || type === 'bordered-link' || type === 'fixed-link' ? (
          <a
            className={buttonClass}
            onClick={buttonClickFunc}
            data-navigation-id={dataNavigationId}
            href={href}
            target={targetCode}
          >
            {children}
          </a>
        ) : (
          <button
            className={buttonClass}
            onClick={buttonClickFunc}
            data-navigation-id={dataNavigationId}
          >
            {children}
          </button>
        )
    }
    // let popupContent = ''
    // if (this.state.popupOpen) {
    //   popupContent = <Popup id={popupId}>{popupContentInside}</Popup>
    // } else {
    //   if (this.state.reopen) {
    //     return (
    //       <>
    //         <Popup id={popupId}>{popupContentInside}</Popup>
    //         {buttonContent}
    //       </>
    //     )
    //   }
    // }

    return (
      <>
        {buttonContent}
        {/*{popupContent}*/}
      </>
    )
  }
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.string,
  extraClass: PropTypes.string,
  children: PropTypes.node.isRequired,
  clickFunc: PropTypes.func,
  dataNavigationId: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  popup: PropTypes.bool,
  popupId: PropTypes.string,
  popupContentInside: PropTypes.any
}

export default Button
