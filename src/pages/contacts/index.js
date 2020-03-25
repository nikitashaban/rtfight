import React from 'react'
import Layout from '../../components/layout/index'
import Container from '../../components/container/index'
import Text from '../../components/text/index'
import Title from '../../components/title/index'
import Form from '../../components/form'
import Logo from '../../components/logo/logo'
import Input from '../../components/input'

const formElements = [
  <Input
    type={'text'}
    placeholder={'Введите ваше имя'}
    name={'FNAME'}
    styling={'bordered'}
  />,
  <Input
    type={'email'}
    placeholder={'Ваш e-mail'}
    name={'EMAIL'}
    styling={'bordered'}
  />
]

const ContactsPage = () => (
  <Layout
    title="Контакты - Новостной портал RTFight.com"
    mainType="centered-huge-about"
    mainBackground="thai"
    footerNextButtonLink={'/'}
    footerPreviousButtonLink={'/blog/'}
  >
    <Container extraClass={'container_contacts-page'}>
      <Logo type={'circle'} />
      <Title type={'h3'} color={'white'} size={'middle'} weight={'normal'}>
        Подпишись на самые актуальные новости мира бокса и будь в курсе первым!
      </Title>
      <Form
        formAction={
          'https://gmail.us20.list-manage.com/subscribe/post?u=662842909d430629888c91951&amp;id=7d0e2a4693'
        }
        formMethod={'post'}
        formTarget={'_blank'}
        elements={formElements}
        buttonType={'rounded'}
        buttonSize={'default'}
        buttonColor={'white'}
        buttonBackground={'red'}
        buttonText={'Подписаться'}
        name={'subscribe'}
        formStyle={'horizontal'}
      />
      <Text>
        Новостной интернет-портал RTFight.com первым публикует самые интересные,
        достоверные и свежие новости из мира бокса. Не надо тратить время на
        поиски интересной статьи про бокс. Все самое лучшее – здесь. Всё о
        профессиональном боксе, ММА, UFC. Эксклюзивные новости. История бокса.
        Наука о боксе. Лучшие интервью. Обзоры соревнований. Фотоотчеты и
        мероприятия. Если ты хочешь всегда быть первым в курсе всех новостей
        бокса, тогда подписывайся на наши новости и получай только самое
        интересное себе на почту. Только достоверная информация от лучших
        спортивных информационных агентств и изданий. Подписывайся и читай самые
        свежие новости первым! Будем на связи!
      </Text>
    </Container>
  </Layout>
)

export default ContactsPage
