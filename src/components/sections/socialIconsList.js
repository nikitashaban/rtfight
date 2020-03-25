import Button from '../button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faVk
} from '@fortawesome/free-brands-svg-icons'
import React from 'react'

const socialIconsList = [
  <Button
    type={'link'}
    color={'white'}
    href={'https://www.facebook.com/groups/rtfight1com'}
    target={'_blank'}
  >
    <FontAwesomeIcon icon={faFacebookF} />
  </Button>,
  <Button
    type={'link'}
    color={'white'}
    href={'https://vk.com/rtfight_com'}
    target={'_blank'}
  >
    <FontAwesomeIcon icon={faVk} />
  </Button>,
  <Button
    type={'link'}
    color={'white'}
    href={'https://instagram.com/rtfight_com'}
    target={'_blank'}
  >
    <FontAwesomeIcon icon={faInstagram} />
  </Button>
]
//   <Button type={'link'} color={'white'} href={'#'} target={'_blank'}>
//   <FontAwesomeIcon icon={faTelegramPlane} />
// </Button>,
// {/*<Button type={'link'} color={'white'} href={'#'} target={'_blank'}>*/}
// {/*  <FontAwesomeIcon icon={faYoutube} />*/}
// {/*</Button>,*/}

export default socialIconsList
