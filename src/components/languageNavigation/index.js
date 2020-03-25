import React from 'react'
import Button from '../button'
import './language-navigation.less'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const LanguageNavigation = () => {
  return (
    <div className="language-navigation">
      <Button background={'transparent'} color={'white'}>
        Ru <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </div>
  )
}

export default LanguageNavigation
