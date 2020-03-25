import React, { Component } from 'react'
import Layout from '../../components/layout/index'
import Container from '../../components/container/index'
import Title from '../../components/title/index'
import Row from '../../components/row'
import './post.less'
import Button from '../../components/button'
import Text from '../../components/text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class BlogPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: false
    }
  }
  componentDidMount() {
    const data = this.props.data.wordpressPost
    console.log(data)
    this.setState({
      data: data
    })
  }
  render() {
    if (this.state.data !== false) {
      const data = this.state.data
      const title = data.title
      const category = data.categories[0].name
      const date = data.date
      const content = data.content
      const image = data.featured_media.localFile.childImageSharp.fixed.src
      return (
        <Layout
          title={title}
          mainType="centered-huge-post"
          mainBackground="gym"
          footerNextButtonLink={'/'}
          footerPreviousButtonLink={'/'}
        >
          <Container extraClass={'container_blog-page_single'}>
            <div className={'button-back'}>
              <Button
                background={'transparent'}
                color={'white'}
                type={'link'}
                href={'/blog/'}
              >
                <FontAwesomeIcon icon={faAngleLeft} /> Вернуться назад
              </Button>
            </div>
            <Row column={'2'} extraClass={'blog'}>
              <div className="row__column">
                <img
                  src={image}
                  alt={'fdsfsd'}
                  className="blog-preview__thumbnail"
                />
              </div>
              <article className="row__column">
                <div className="blog-preview">
                  <div className="blog-preview__meta">
                    <Button
                      color={'white'}
                      background={'red'}
                      type={'rounded'}
                      size={'middle'}
                    >
                      {category}
                    </Button>
                    <Text color={'gray'} size={'middle'}>
                      {date}
                    </Text>
                  </div>
                </div>
                <Title type={'h1'} size={'middle'} color={'white'}>
                  {title}
                </Title>
                <Text color={'white'} size={''}>
                  {content}
                </Text>
              </article>
            </Row>
          </Container>
        </Layout>
      )
    } else {
      return (
        <Layout
          title={'Loading...'}
          mainType="centered-huge-about"
          mainBackground="gym"
          footerNextButtonLink={'/'}
          footerPreviousButtonLink={'/'}
        >
          <Container extraClass={'container_blog-page_single'}>
            <Row column={'2'} extraClass={'blog'}>
              <article className="row__column">
                <Title type={'h1'} size={'middle'} color={'white'}>
                  Loading...
                </Title>
              </article>
            </Row>
          </Container>
        </Layout>
      )
    }
  }
}

export default BlogPost

export const posteQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      categories {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fixed(width: 500, height: 300) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      date(formatString: "DD.MM.YYYY")
    }
  }
`
