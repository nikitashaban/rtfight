import React from 'react'
import Layout from '../components/layout/index'
import Container from '../components/container/index'
import Text from '../components/text/index'
import Title from '../components/title/index'
import Button from '../components/button/index'
import Logo from '../components/logo/logo'

const IndexPage = () => (
  <Layout
    title="Index page"
    mainType="centered-big"
    mainBackground="default"
    footerNextButtonLink={'/about/'}
  >
    <Container extraClass={'container_home-page'}>
      <Logo type={'circle'} />
      <Title
        type={'h1'}
        color={'white'}
        size={'huge'}
        weight={'normal'}
        extraClass={'title_letter-spacing-big'}
      >
        READY TO FIGHT
      </Title>
      <Title type={'h3'} color={'white'} size={'middle'} weight={'normal'}>
        Новостной портал RTFight.com
      </Title>
      <Text>
        Собрание лучших материалов о боксе. Эксклюзивные новости. Главная
        тематика нашего овостного портала - бокс, и все что с ним связано.
      </Text>
      {/*<Button*/}
      {/*  color={'white'}*/}
      {/*  background={'red'}*/}
      {/*  type={'rounded'}*/}
      {/*  size={'default'}*/}
      {/*>*/}
      {/*  Зарегестрироваться*/}
      {/*</Button>*/}
    </Container>
    <Button
      color={'white'}
      background={'black'}
      type={'fixed-link'}
      size={'default'}
      href={'/about/'}
    >
      Узнать подробнее
    </Button>
  </Layout>
)

export default IndexPage
