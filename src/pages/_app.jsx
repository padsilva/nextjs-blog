import PropTypes from 'prop-types'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

import GlobalStyle from 'styles/global'
import SEO from '../../next-seo.config'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My Blog</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#ffffff" />
      <meta
        name="description"
        content="A boilerplate to work with JavaScript, React, NextJS and Styled Components"
      />
    </Head>
    <DefaultSeo {...SEO} />
    <GlobalStyle />
    <Component {...pageProps} />
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default App
