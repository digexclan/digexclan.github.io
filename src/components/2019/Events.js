import React from "react"
import styled from "styled-components"

import events2019 from "../../data/2019/events"

const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);

  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
`

const Desc = styled.div`
  margin-top: 5px;
  font-size: 18px;
`

const EventImg = styled.img``

const Event = ({ name, desc, image, style }) => (
  <div
    style={{
      border: "1px solid #e7e7e7",
      borderRadius: "10px",
      padding: "22px",
    }}
  >
    <EventImg src={image} style={style} />
    <Name>{name}</Name>
    <Desc>{desc}</Desc>
  </div>
)

export default () => (
  <>
    <div style={{ marginTop: "20px", fontSize: "26px", fontWeight: "700" }}>
      Events
    </div>
    <Container>
      {events2019.map(event => (
        <Event {...event} />
      ))}
    </Container>
  </>
)
