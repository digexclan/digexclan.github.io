import React, { useState } from "react"
import styled from "styled-components"

import { Modal, Button } from "react-bootstrap"

import { Muted } from "../../pages/digex-2021"

import events from "../../data/2021/events"

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

const Event = ({ name, desc, longDesc, image, style }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const EventContainer = styled.div`
    border: 1px solid #e7e7e7;
    border-radius: 10px;
    padding: 22px;

    cursor: pointer;

    transition: all 0.3s ease-in;
    &:hover {
      transform: translateY(-2px);
    }
  `

  return (
    <>
      <EventContainer onClick={handleShow}>
        <EventImg src={image} style={style} />
        <Name>{name}</Name>
        <Desc>{desc}</Desc>
      </EventContainer>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{desc}</p>
          <div style={{ whiteSpace: "pre-wrap" }}>{longDesc ?? longDesc}</div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default () => (
  <>
    <div style={{ marginTop: "20px", fontSize: "26px", fontWeight: "700" }}>
      Events
    </div>
    <Muted style={{ margin: 0 }}>Click on the event tiles for details.</Muted>
    <Container>
      {events.map(event => (
        <Event {...event} />
      ))}
    </Container>
  </>
)
