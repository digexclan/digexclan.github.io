import React from "react"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import sarikaMaam from "../../images/founder.jpg"

const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-row-start: 2;
    grid-row-end: 1;
  } */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const FounderImg = styled.img`
  height: 300px;
  @media screen and (max-width: 768px) {
  }
`

const ImgC = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 40vh;
    width: 100%;
  }
`

const T = styled.div`
  max-width: 50%;
  @media screen and (max-width: 768px) {
    grid-row: 2;
    height: 100px;
    max-width: 100%;
  }
`

const Name = styled.div`
  font-weight: bold;
  font-size: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 3vh;
  }
`

const Role = styled.div`
  margin-top: 3px;
  font-size: 20px;
  color: #5f5f5f;
`

const Desc = styled.div`
  margin-top: 15px;
  font-size: 20px;
  margin-bottom: 5vh;
`

export default () => (
  <Container>
    <T>
      <Name>Mrs. Sarika Kaushal</Name>
      <Role>Founder and Teacher-in-Charge</Role>
      <Desc>
        Mrs. Kaushal founded Digex in 2009, and has been the club's
        teacher-in-charge ever since. Today, in addition to being a Computer
        Science teacher, she oversees all Digex activities, guides the club
        leadership in planning and organizing events, and mentors the club's
        junior members.
      </Desc>
    </T>
    <ImgC>
      <Animated animationIn="fadeInRight">
        <FounderImg src={sarikaMaam} />
      </Animated>
    </ImgC>
  </Container>
)
