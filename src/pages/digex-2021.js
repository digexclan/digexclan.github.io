import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Subtitle, Container } from "./members"
import Founder from "../components/About/Founder"

import Events from "../components/2019/Events"

import digexImg from "../images/digex.png"

const Landing = styled.div`
  width: 100%;
  margin-top: 2vh;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`

export const Muted = styled.div`
  margin-top: 20px;
  font-size: 20px;
  color: #5d5d5d;
`

const T = styled.div``

const DigexImg = styled.img``

export default () => (
  <Layout>
    <SEO title="Digex 2020" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Digex 2021</Subtitle>
        <Muted>The latest edition of our flagship event, Digex. Coming Soon.</Muted>
        {/* <Landing> */}
        {/* <Events /> */}
        {/* </Landing> */}
        {/* <Founder /> */}
      </Container>
    </div>
  </Layout>
)
