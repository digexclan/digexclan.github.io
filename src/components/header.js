import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import Navbar from "./navbar"

// import digexLogo from "../images/digex-header.png"
import digexLogo from "../images/logo_cropped.png"

const Logo = styled.img`
  height: 30px;
  margin: auto 0;
  transform: translateY(3px);
`

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
        <Animated animationIn="bounceInLeft">
          <Link
            to="/"
            style={{
              color: `#000`,
              textDecoration: `none`,
            }}
          >
            {/* {siteTitle} */}
            <Logo src={digexLogo} />
          </Link>
        </Animated>
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
