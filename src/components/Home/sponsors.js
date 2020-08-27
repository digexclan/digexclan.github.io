import React from "react"
import styled from "styled-components"

import sponsors from "../../data/sponsors"

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Sponsor = ({ name, src }) => (
  <img style={{ height: "120px" }} src={src} alt={name} />
)

export default () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Container>
      {sponsors.map(sponsor => (
        <Sponsor {...sponsor} />
      ))}
    </Container>
  </div>
)
