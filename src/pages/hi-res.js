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

const RegLink = styled.a`
  text-decoration: none;
  color: #2977f5;

  &:visited {
    color: #2977f5;
  }
`

const T = styled.div``

const DigexImg = styled.img``

export default () => (
  <Layout>
    <SEO title="Digex 2021" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Hi-Res</Subtitle>
        An online movie making competition, where a movie with a message is to be created and sent. 
        <Muted>
          <b>Topic: Reversed Roles [open to interpretation]</b>
          <div style={{ whiteSpace: "pre-wrap" }}>Classes: 6th to 12th.<br />
          2 Team(s) per school.<br />
          4 Participant(s) per team.<br />
          A title must be provided and the video must have a message.<br />
          The time duration of the movie should not be more than 4-6 minutes.<br />
          The team will be disqualified if the video is taken from the internet.<br />
          No stock photographs/footages are allowed. Any copyrighted material should given proper credit including sound effects.<br />
          Judgement Criteria:<br />
              {"    "}a. Creativity. <br />
              {"    "}b. Relevance to Topic.<br />
              {"    "}c. Technical Aspects.<br />
            Submission form will be open till 16th July 2021 11:59PM IST.<br />
            Please submit <a href="https://bit.ly/DigexHI-RESSubmissions">here.</a>
        </div>
        </Muted>
      </Container>
    </div>
  </Layout>
)
