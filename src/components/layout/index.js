import React from 'react'
import PropTypes from 'prop-types'
import SEO from './parts/seo'
import Header from '../header/'
import Footer from '../footer/'
import './layout.less'

const Layout = props => {
  const {
    children,
    description,
    lang,
    meta,
    keywords,
    title,
    mainType,
    mainBackground,
    footerNextButtonLink,
    footerPreviousButtonLink
  } = props
  const mainTypeClass = mainType ? ' main_type_' + mainType : ''
  const mainBackgroundClass = mainBackground
    ? ' main_background_' + mainBackground
    : ''
  const mainClass = 'main' + mainTypeClass + mainBackgroundClass

  return (
    <div className="wrapper">
      <SEO
        description={description}
        lang={lang}
        meta={meta}
        keywords={keywords}
        title={title}
      />
      <Header />
      <main className={mainClass}>{children}</main>
      <Footer
        nextButtonLink={footerNextButtonLink}
        previousButtonLink={footerPreviousButtonLink}
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
