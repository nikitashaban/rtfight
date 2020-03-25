import React from 'react'
import Container from '../container'
import './header.less'
import Navigation from '../navigation'
import Logo from '../logo/logo'
import Button from '../button'
import Icon from '../icon'

// const loginButtons = [
//   <Button type={'link'} color={'white'} href={'/contacts/'}>
//     Регистрация
//   </Button>,
//   <Button type={'link'} color={'white'} href={'#'}>
//     Войти
//   </Button>
// ]

const navigationItems = [
  <Button
    color={'white'}
    background={'red'}
    type={'link-button-rounded'}
    size={'default'}
    extraClass={'button_navigation_login'}
    href={'/blog/'}
  >
    Основные новости
  </Button>,
  <Button type={'link'} color={'white'} href={'/'}>
    Главная
  </Button>,
  <Button type={'link'} color={'white'} href={'/about/'}>
    О сервисе
  </Button>,
  <Button type={'link'} color={'white'} href={'/blog/'}>
    Блог
  </Button>,
  <Button type={'link'} color={'white'} href={'/contacts/'}>
    Контакты
  </Button>
]
// {/*<Button type={'link'} color={'white'} href={'#'}>*/}
// {/*  Категории*/}
// {/*</Button>,*/}
// {/*<Button type={'link'} color={'white'} href={'#'}>*/}
// {/*  Мероприятия*/}
// {/*</Button>,*/}
// {/*<Button type={'link'} color={'white'} href={'#'}>*/}
// {/*  Отзывы*/}
// {/*</Button>,*/}

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      statusMenu: false
    }
    this.handleStatusMenuOpen = this.handleStatusMenuOpen.bind(this)
  }

  handleStatusMenuOpen(e) {
    if (
      e.target.classList.contains('button') ||
      e.target.classList.contains('navigation')
    ) {
      this.setState({ statusMenu: !this.state.statusMenu })
    }
  }

  render() {
    const navigationButtonClass =
      'header__navigation_button ' +
      (this.state.statusMenu
        ? 'header__navigation_button_open'
        : 'header__navigation_button_close')
    const navigationButtonIcon =
      'hamburger ' +
      (this.state.statusMenu ? 'icon_hamburger_close' : 'icon_hamburger_open')

    return (
      <>
        <header className="header">
          <Container>
            <div className="header__left">
              <div className={navigationButtonClass}>
                <Button clickFunc={this.handleStatusMenuOpen}>
                  <Icon name={navigationButtonIcon}>
                    <span />
                    <span />
                    <span />
                  </Icon>
                </Button>
              </div>
              {/*<LanguageNavigation />*/}
            </div>
            <Logo />
            {/*<div className="header__right">*/}
            {/*  <List items={loginButtons} type={'horizontal'} />*/}
            {/*</div>*/}
          </Container>
        </header>
        <Navigation
          items={navigationItems}
          statusOpen={this.state.statusMenu}
          handleStatusMenuOpen={this.handleStatusMenuOpen}
        />
      </>
    )
  }
}

export default Header
