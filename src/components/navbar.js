import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Members",
    href: "/members",
  },
  {
    title: "Alumni",
    href: "/alumni",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
]

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.div`
  color: #000;
  font-size: 30px;
  font-weight: 600;
  margin-right: 40px;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
  }

  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
`

const Mobile = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    display: block;
  }

  color: black;
  font-size: 30px;

  margin: auto 0;

  margin-left: auto;
  margin-right: 10px;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  opacity: 0.9;

  z-index: 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`

const X = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export default () => {
  const [overlay, setOverlay] = useState(false)

  return (
    <>
      <Container>
        {links.map(link => (
          <Link style={{ textDecoration: "none" }} to={link.href}>
            <NavItem>{link.title}</NavItem>
          </Link>
        ))}
        <a href={require("../Expose 2020.pdf")} style={{textDecoration:"none"}} rel="noopener noreferrer">
            <NavItem style={{ marginLeft: overlay ? "20px" : "auto" }}>
              Magazine
           </NavItem>
        </a>
      </Container>
      <Mobile onClick={() => setOverlay(true)}>☰</Mobile>
      <Overlay style={{ display: overlay ? "flex" : "none" }}>
        <X onClick={() => setOverlay(false)}>x</X>
        {links.map(link => (
          <Link style={{ textDecoration: "none" }} to={link.href}>
            <NavItem style={{ marginLeft: overlay ? "20px" : "auto" }}>
              {link.title}
            </NavItem>
          </Link>

        ))}
        <a href={require("../Expose 2020.pdf")} style={{textDecoration:"none"}} rel="noopener noreferrer">
            <NavItem style={{ marginLeft: overlay ? "20px" : "auto" }}>
              Magazine
           </NavItem>
        </a>
      </Overlay>
    </>
  )
}
