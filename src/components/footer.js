import React from "react"
import styled from "styled-components"

import { links } from "./navbar"

const Container = styled.div`
  width: 100%;
  margin-top: 50px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    width: 85%;
    margin: 0 auto;
  }
`

const Col = styled.div``

const H = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
`

const I = styled.div`
  margin-top: 10px;
`

const A = styled.a`
  text-decoration: none;
  color: #000;
  &:visited {
    color: #000;
  }
  &:active {
    color: #000;
  }
`

export default () => (
  <Container>
    <Col>
      <H>Get in touch</H>
      <A href="https://dpsrkp.net" target="_blank">
        <I>D.P.S. R.K. Puram</I>
      </A>
      <A href="mailto:photography.digex@gmail.com" target="_blank">
        <I>photography.digex@gmail.com</I>
      </A>
      <A href="tel:01149115500" target="_blank">
        <I>011 4911 5500</I>
      </A>
    </Col>
    <Col>
      <H>Web Links</H>
      {links.map(link => (
        <A href={link.href}>
          <I>{link.title}</I>
        </A>
      ))}
    </Col>
    <Col>
      <H>About</H>
      <I>
        Digex is a group of Photography and Film making Professionals at Delhi
        Public School, R. K. Puram, DIGEX stands for "Digital Excellence". We
        love showing the people our perception of this world through photographs
        and films that make them appreciate the world around them.
      </I>
    </Col>
  </Container>
)
