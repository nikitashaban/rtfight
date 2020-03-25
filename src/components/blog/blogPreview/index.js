import React from 'react'
import './blog-preview.less'
import PropTypes from 'prop-types'
import Title from '../../title'
import Button from '../../button'
import Text from '../../text'

const BlogPreview = ({ thumbnail, category, date, title, link, text }) => {
  const textContent = text ? <Text>{text}</Text> : ''
  return (
    <article className="blog-preview">
      <img src={thumbnail} alt={title} className="blog-preview__thumbnail" />
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
      <div className="blog-preview__content">
        <Title type={'h2'} color={'white'} weight={'normal'} size={'middle'}>
          <Button type={'link'} href={link} color={'white'}>
            {title}
          </Button>
        </Title>
        {textContent}
      </div>
    </article>
  )
}

BlogPreview.propTypes = {
  thumbnail: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string
}

export default BlogPreview
