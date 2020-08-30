import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Subtitle, Container } from "./members"
import Founder from "../components/About/Founder"

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

const T = styled.div``

const DigexImg = styled.img``

export default () => (
  <Layout>
    <SEO title="About" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>About</Subtitle>
        <Landing>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DigexImg src={digexImg} />
          </div>
          <T>
            Digex, short for Digital Excellence, is the photography and
            film-making student organization at Delhi Public School, R.K. Puram.
            Digex was founded in 2009 by a group of photography enthusiasts in
            order to give themselves an outlet to channel their creative energy.
            Today, Digex is over 35 members strong and is active and bustling
            with exhibitions, competitions, and symposiums throughout the year.
            Digex is open to students of all classes (6 to 12) and is completely
            student run, with guidance from faculty members. Digex attends
            several competitions that are organized by other schools and
            organizations in and around the Delhi-NCR region and every year
            plays host to a number of schools for a weekend-long computer
            science and photography competitional meet.
          </T>
        </Landing>
        <Founder />
      </Container>
    </div>
  </Layout>
)
