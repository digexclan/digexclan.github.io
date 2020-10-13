import React from "react"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import members from "../data/members.json"

export const Container = styled.div`
  width: 90%;
`

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
`

const Grade = styled.div`
  font-size: 28px;
  margin-top: 30px;
  font-weight: 600;
`

const Members = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    margin-top: 30px;
    grid-template-columns: 1fr;
  }
`

const HMember = styled.div`
  width: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Person = ({ name, role }) => {
  const Name = styled.div`
    font-weight: 500;
    font-size: 24px;
  `

  const Role = styled.div`
    margin-top: 10px;
  `

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        border: "1px solid rgb(175, 167, 167)",
        borderRadius: "6px",
      }}
    >
      <Name>{name}</Name>
      <Role>{role}</Role>
    </div>
  )
}

export default () => (
  <Layout>
    <SEO title="Members" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Members</Subtitle>

        <Grade style={{ marginBottom: "15px", textAlign: "center" }}>
          Honourary Member
        </Grade>
        <HMember>
          <div />
          <Person name="Krishnav Gaind" role="Member" />
          <div />
        </HMember>

        {members.map(({ year, members }) => (
          <>
            <Grade>{year}</Grade>
            <Members>
              {members.map(member => (
                // <Animated animationIn="fadeInDown">
                <Person {...member} />
                // </Animated>
              ))}
            </Members>
          </>
        ))}
      </Container>
    </div>
  </Layout>
)
