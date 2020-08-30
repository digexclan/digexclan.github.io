import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import alumni from "../data/alumni.json"

export const Container = styled.div`
  width: 90%;
`

export const Subtitle = styled.div`
  font-size: 40px;
  font-weight: 700;
`

const Batch = styled.div`
  font-size: 28px;
  margin-top: 30px;
  font-weight: 600;
`

const People = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    margin-top: 30px;
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
    <SEO title="Alumni" />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container>
        <Subtitle>Alumni</Subtitle>

        {alumni.map(({ batch, people }) => (
          <>
            <Batch>Batch of {batch}</Batch>
            <People>
              {people.map(person => (
                <Person {...person} />
              ))}
            </People>
          </>
        ))}
      </Container>
    </div>
  </Layout>
)
