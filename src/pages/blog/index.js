import React, { Component } from 'react'
import Layout from '../../components/layout/index'
import Container from '../../components/container/index'
import Title from '../../components/title/index'
import Row from '../../components/row'
import BlogPreview from '../../components/blog/blogPreview'
import { graphql } from 'gatsby'
import Button from '../../components/button'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './blog.less'

class BlogPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allData: false,
      data: false,
      countPage: 0,
      currentNumber: 1
    }
    this.buttonPrevCLick = this.buttonPrevCLick.bind(this)
    this.buttonNextCLick = this.buttonNextCLick.bind(this)
  }
  componentDidMount() {
    const data = this.props.data.allWordpressPost.edges
    this.setState({
      allData: data,
      data: this.getDataPages(data, 0, 3),
      countPage: Math.ceil(data.length / 3)
    })
  }

  getDataPages(data, start, limit) {
    return data.slice(start, start + limit)
  }

  buttonPrevCLick() {
    let currentNumber = this.state.currentNumber - 1
    let data = false
    if (currentNumber <= 1) {
      currentNumber = 1
      data = this.getDataPages(this.state.allData, 0, 3)
    }
    data = this.getDataPages(this.state.allData, (currentNumber - 1) * 3, 3)
    this.setState({
      currentNumber: currentNumber,
      data: data
    })
  }
  buttonNextCLick() {
    let currentNumber = this.state.currentNumber + 1
    let data = false
    if (currentNumber >= this.state.countPage) {
      currentNumber = this.state.countPage
    }
    data = this.getDataPages(this.state.allData, (currentNumber - 1) * 3, 3)
    this.setState({
      currentNumber: currentNumber,
      data: data
    })
  }
  render() {
    const postDataArray = this.state.data
    console.log(postDataArray)
    if (postDataArray !== false) {
      const bigPost = postDataArray[0] ? postDataArray[0].node : false
      const firstPost = postDataArray[1] ? postDataArray[1].node : false
      const secondPost = postDataArray[2] ? postDataArray[2].node : false

      const bigPostContent = bigPost ? (
        <BlogPreview
          category={bigPost.categories[0].name}
          date={bigPost.date}
          link={'/' + bigPost.slug}
          thumbnail={
            bigPost.featured_media &&
            bigPost.featured_media.localFile.childImageSharp.fixed.src
          }
          title={bigPost.title}
        />
      ) : (
        ''
      )

      const firstPostContent = firstPost ? (
        <BlogPreview
          category={firstPost.categories[0].name}
          date={firstPost.date}
          link={'/' + firstPost.slug}
          thumbnail={
            firstPost.featured_media &&
            firstPost.featured_media.localFile.childImageSharp.fixed.src
          }
          title={firstPost.title}
          text={firstPost.excerpt}
        />
      ) : (
        ''
      )

      const secondPostContent = secondPost ? (
        <BlogPreview
          category={firstPost.categories[0].name}
          date={secondPost.date}
          link={'/' + secondPost.slug}
          thumbnail={
            secondPost.featured_media.localFile &&
            secondPost.featured_media.localFile.childImageSharp.fixed.src
          }
          title={secondPost.title}
          text={secondPost.excerpt}
        />
      ) : (
        ''
      )
      return (
        <Layout
          title="Блог"
          mainType="centered-huge-about"
          mainBackground="gym"
          footerNextButtonLink={'/contacts/'}
          footerPreviousButtonLink={'/about/'}
        >
          <Container extraClass={'container_blog-page'}>
            <Title
              type={'h1'}
              color={'white'}
              size={'big-large'}
              weight={'normal'}
            >
              Блог
            </Title>
            <Row column={'2'} extraClass={'blog'}>
              <div className="row__column">{bigPostContent}</div>
              <div className="row__column">
                <Row column={'2'} extraClass={'blog-small'}>
                  <div className="row__column">{firstPostContent}</div>
                  <div className="row__column">{secondPostContent}</div>
                </Row>
              </div>
            </Row>
            <div className="blog-pagination">
              <Button
                type={'link'}
                extraClass={'button-prev'}
                clickFunc={this.buttonPrevCLick}
              >
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
              <div className="blog-pagination__text">
                <p className="blog-pagination__number current">
                  {this.state.currentNumber}
                </p>
                <p className="blog-pagination__number separator">/</p>
                <p className="blog-pagination__number all">
                  {this.state.countPage}
                </p>
              </div>
              <Button
                type={'link'}
                extraClass={'button-next'}
                clickFunc={this.buttonNextCLick}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </Container>
        </Layout>
      )
    } else {
      return (
        <Layout
          title="About"
          mainType="centered-huge-about"
          mainBackground="gym"
          footerNextButtonLink={'/'}
          footerPreviousButtonLink={'/'}
        >
          <Container extraClass={'container_blog-page'}>
            <Title
              type={'h1'}
              color={'white'}
              size={'big-large'}
              weight={'normal'}
            >
              Loading...
            </Title>
          </Container>
        </Layout>
      )
    }
  }
}

export default BlogPage

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          id
          title
          excerpt
          slug
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
    }
  }
`
