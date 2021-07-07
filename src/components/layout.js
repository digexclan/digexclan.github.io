/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"

import Header from "./header"
import Footer from "./footer"

import "bootstrap/dist/css/bootstrap.min.css"
import "./layout.css"
import "./main.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Helmet>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1180,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
        {/* <footer>
          © {new Date().getFullYear()}
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
