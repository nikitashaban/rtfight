import React from 'react'
import Layout from '../components/layout/index'
import Container from '../components/container'
import Text from '../components/text'

const IndexPage = () => (
  <Layout title="404 page" mainType="centered-small" mainBackground="404">
    <Container>
      <Text>
        Скоро вы сможете войти в личный кабинет, заполнить анкету и стать частью
        грандиозного проекта. Пожалуйста, подождите. Осталось совсем немного!
      </Text>
    </Container>
  </Layout>
)

export default IndexPage
