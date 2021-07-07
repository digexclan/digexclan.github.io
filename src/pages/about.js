import React from "react"
import styled from "styled-components"
import { Animated } from "react-animated-css"

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
            <Animated animationIn="fadeInLeft">
              <DigexImg src={digexImg} />
            </Animated>
          </div>
          <T>
            The Digital Excellence society or Digex is Delhi Public School
            R.K.Puram's photography and filmmaking club. Founded in 2009, the
            Digex society is a group of passionate members who channel their
            creativity and out of the box thinking into creative fields like
            Photography, Filmmaking, Creative Design, Video editing and much
            more. Any student of the school can seize the opportunity to be a
            part of the club. At present, the club is over 60 members strong
            with students from all classes ( 6-12 ). The Digex society is
            invited to a plethora of competitions and events throughout the year
            that are on national and international levels. Our goal is to strive
            towards being the best in all fields and competitions we take part
            in.
          </T>
        </Landing>
        <Founder />
      </Container>
    </div>
    <div style={{ marginBottom: "36vh" }} />
  </Layout>
)
