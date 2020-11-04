import React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import { FaChevronCircleRight as Chevron } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sponsors from "../components/Home/sponsors"
import Know from "../components/Home/know"

import photoSession from "../images/photo-session.png"

import { Document, Page } from 'react-pdf';

// import page1 from "../images/pages/0.jpg"
const Landing = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  grid-column-gap: 2rem;
  height: 60vh;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-rows: 50% 50%;
    grid-template-columns: 100%;
    height: 90vh;
  }
`

// const page = styled.div`
//   height: 20px;
//   background-color: red;
// `
// const Page = ({name, src }) => (
//   <img style={{ height: "120px", width: "auto" }} src={src} alt={name} />
// )

const IndexPage = () => (
  <Layout>
    <div className="page" style={{width:"100%",textAlign:"center"}}>
      
    
      <img src={require("../images/pages/0.jpg")} width="70%" />
      <img src={require("../images/pages/1.jpg")} width="70%" />
      <img src={require("../images/pages/2.jpg")} width="70%" />
      <img src={require("../images/pages/3.jpg")} width="70%" />
      <img src={require("../images/pages/4.jpg")} width="70%" />
      <img src={require("../images/pages/5.jpg")} width="70%" />
      <img src={require("../images/pages/6.jpg")} width="70%" />
      <img src={require("../images/pages/7.jpg")} width="70%" />
      <img src={require("../images/pages/8.jpg")} width="70%" />
      <img src={require("../images/pages/9.jpg")} width="70%" />
      <img src={require("../images/pages/10.jpg")} width="70%" />
      <img src={require("../images/pages/11.jpg")} width="70%" />
      <img src={require("../images/pages/12.jpg")} width="70%" />
      <img src={require("../images/pages/13.jpg")} width="70%" />
      <img src={require("../images/pages/14.jpg")} width="70%" />
      <img src={require("../images/pages/15.jpg")} width="70%" />
      <img src={require("../images/pages/16.jpg")} width="70%" />
      
    </div>
    
  </Layout>
)

export default IndexPage
  
