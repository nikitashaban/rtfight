import React from 'react'
import Layout from '../../components/layout/index'
import Container from '../../components/container/index'
import Text from '../../components/text/index'
import Title from '../../components/title/index'
import Row from '../../components/row'

const AboutPage = () => (
  <Layout
    title="О нас"
    mainType="centered-huge-about"
    mainBackground="gym"
    footerNextButtonLink={'/blog/'}
    footerPreviousButtonLink={'/'}
  >
    <Container extraClass={'container_about-page'}>
      <Row column={'2-65'} extraClass={'pretext'}>
        <div className="row__column">
          <Title type={'h3'} color={'white'} size={'large'} weight={'normal'}>
            Новостной портал RTFight.com
          </Title>
        </div>
        <div className="row__column">
          <Text>
            Новостной интернет-портал RTFight.com - это собрание лучших
            материалов о боксе. Эксклюзивные новости. Только достоверная
            информация. Без искажения желтой прессой. Мы - на шаг впереди. У нас
            вы узнаете первыми о самых главных событиях в мире бокса.
          </Text>
          <Text>
            Главная тематика новостного портала RTFight.com - бокс, и все что с
            ним связано. Всё о профессиональном боксе, ММА, UFC, статистика
            боксеров и бойцов, репортажи, обзоры соревнований, первые интервью
            знаменитых спортсменов и актуальные фото.
          </Text>

          <Text>
            У нас вы найдете самые увлекательные интервью известных боксеров и
            рассказы об их трудовых буднях и личной жизни. Биографии, супруги,
            достижения и скандалы с участием известных спортсменов. Как
            сложилась судьба «после спорта». Кто из мировых звезд ушел в
            политику и кто кардинально сменил вид деятельности. На нашем портале
            вы можете прочитать все то, что вы хотели бы знать о мировых
            звездах.
          </Text>
        </div>
      </Row>
      <Row column={'4'} extraClass={'rounds'}>
        <div className="row__column">
          <Text color={'gray'}>01</Text>
          <Title type={'h3'} color={'red'} size={'middle'} weight={'normal'}>
            Мировые события
          </Title>
          <Text>
            Мы публикуем самую важную и свежую информацию о мировых событиях в
            данном виде спорта. Новости бокса профессионального и любительского.
            Всё об истории бокса, новости спортивных клубов, статьи о
            профессиональных бойцах, все о тренажерах и техниках тренировок,
            обзоры поединков, расписание боёв и другие материалы из мира бокса.
          </Text>
        </div>
        <div className="row__column">
          <Text color={'gray'}>02</Text>
          <Title type={'h3'} color={'red'} size={'middle'} weight={'normal'}>
            Не только про бокс
          </Title>
          <Text>
            Новостной портал RTFight.com создан для тех, кто не только
            интересуется боксом, но и хочет стать полноценным участником нашего
            информационного проекта. Совсем скоро, мы раскроем полную
            функциональность данного интернет-ресурса.
          </Text>
        </div>
        <div className="row__column">
          <Text color={'gray'}>03</Text>
          <Title type={'h3'} color={'red'} size={'middle'} weight={'normal'}>
            Следите за нашими новостями
          </Title>
          <Text>
            Оставайтесь с нами, подписывайтесь, следите за обновлениями и будьте
            в курсе самых захватывающих спортивных новостей о боксе.
          </Text>
        </div>
      </Row>
      {/*<Button*/}
      {/*  color={'white'}*/}
      {/*  background={'red'}*/}
      {/*  type={'link-button-rounded'}*/}
      {/*  size={'default'}*/}
      {/*  href={'/contacts/'}*/}
      {/*>*/}
      {/*  Зарегестрироваться*/}
      {/*</Button>*/}
    </Container>
    {/*<Button*/}
    {/*  color={'white'}*/}
    {/*  background={'red'}*/}
    {/*  type={'fixed-link'}*/}
    {/*  size={'default'}*/}
    {/*>*/}
    {/*  Посмотреть категории*/}
    {/*</Button>*/}
  </Layout>
)

export default AboutPage
