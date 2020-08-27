import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sponsors from "../components/Home/sponsors"

import photoSession from "../images/photo-session.png"

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

const Box = styled.div`
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

const BigT = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-top: 7rem;

  @media screen and (max-width: 760px) {
    font-size: 50px;
    margin-top: 0;
  }
`

const SubT = styled.div`
  font-weight: 500;
  color: #7d7c7c;
  font-size: 20px;
`

const LearnMore = styled.div`
  padding: 18px 40px;
  background: #3f3d56;
  color: #fff;
  font-weight: 500;
  width: fit-content;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing>
      <Box>
        <BigT>Change your lens, change your story.</BigT>
        <SubT>The photography club at Delhi Public School, R.K. Puram.</SubT>
        <LearnMore>Learn more</LearnMore>
      </Box>
      <Box>
        <img style={{ userSelect: "none" }} src={photoSession} />
      </Box>
    </Landing>
    <Sponsors />
  </Layout>
)

export default IndexPage
