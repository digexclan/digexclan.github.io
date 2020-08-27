import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Members",
    href: "/members",
  },
]

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
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

export default () => (
  <Container>
    {links.map(link => (
      <Link style={{ textDecoration: "none" }} to={link.href}>
        <NavItem>{link.title}</NavItem>
      </Link>
    ))}
  </Container>
)
