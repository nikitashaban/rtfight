import React from 'react'
import './footer.less'
import Container from '../container'
import Text from '../text'
import List from '../list'
import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import socialIconsList from '../sections/socialIconsList'

const Footer = props => {
  const { nextButtonLink, previousButtonLink } = props
  const nextButtonContent = nextButtonLink ? (
    <Button
      background={'transparent'}
      color={'white'}
      type={'link'}
      href={nextButtonLink}
    >
      Далее <FontAwesomeIcon icon={faAngleRight} />
    </Button>
  ) : (
    ''
  )
  const previousButtonContent = previousButtonLink ? (
    <Button
      background={'transparent'}
      color={'white'}
      type={'link'}
      href={previousButtonLink}
    >
      <FontAwesomeIcon icon={faAngleLeft} /> Назад
    </Button>
  ) : (
    <List items={socialIconsList} type={'horizontal'} />
  )
  return (
    <footer className="footer">
      <Container>
        <div className="footer_left">{previousButtonContent}</div>
        <Text>© Все права защищены. RTFight.com - 2019</Text>
        <div className="footer_right">{nextButtonContent}</div>
      </Container>
    </footer>
  )
}

export default Footer
