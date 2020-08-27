import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1180,
        padding: `1.45rem 0.3rem`,
        display: "flex",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "30px" }}>
        <Link
          to="/"
          style={{
            color: `#000`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Navbar />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
