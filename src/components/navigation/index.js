import React from 'react'
import './navigation.less'
import PropTypes from 'prop-types'
import List from '../list'
import socialIconsList from '../sections/socialIconsList'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statusNavigationOpen: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({ statusNavigationOpen: props.statusOpen })
  }

  render() {
    const { items } = this.props
    const navigationContent = items ? (
      <List type={'horizontal'} items={items} />
    ) : (
      ''
    )
    const navigationClass =
      'navigation ' +
      (this.state.statusNavigationOpen ? 'navigation_open' : 'navigation_close')
    return (
      <nav
        className={navigationClass}
        onClick={this.props.handleStatusMenuOpen}
      >
        <div className="navigation__container">
          <div className="navigation__menu">{navigationContent}</div>
          <div className="navigation__social">
            <List items={socialIconsList} type={'horizontal'} />
          </div>
        </div>
      </nav>
    )
  }
}

Navigation.propTypes = {
  items: PropTypes.array.isRequired,
  statusOpen: PropTypes.bool,
  statusNavigationOpen: PropTypes.func
}

export default Navigation
