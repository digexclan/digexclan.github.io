import React from "react"
import styled from "styled-components"

import sponsors from "../../data/sponsors"

const Container = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* flex-wrap: wrap; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Sponsor = ({ name, src, customStyles }) => {
  const SponsorContainer = styled.div`
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  `

  return (
    <SponsorContainer>
      <img
        style={{ ...customStyles, width: "auto", margin: "25px" }}
        src={src}
        alt={name}
      />
    </SponsorContainer>
  )
}

export default () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: "1",
      flexBasis: "0",
    }}
  >
    <Container>
      {sponsors.map(sponsor => (
        <a href={sponsor.href} target="_blank">
          <Sponsor {...sponsor} />
        </a>
      ))}
    </Container>
  </div>
)
