import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 5vh 14vw;
`

const H = styled.div`
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 20px;
`

const D = styled.div``

const Buttons = styled.div`
  display: grid;
  width: 20vw;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 85vw;
  }
`

const Button = styled.div`
  padding: 15px 18px;
  margin: 5px;
  border-radius: 12px;
  user-select: none;
  border: 1px solid #b5b5b5;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

export default () => (
  <Container>
    <H>Know Digex</H>
    <D>
      Digex is the photography and film-making student organization at Delhi
      Public School, R.K. Puram which serves as an outlet for photography
      enthusiasts to channel their creative energy.
    </D>
    <Buttons>
      <Button>Read More</Button>
      <Button>Our Magazine</Button>
    </Buttons>
  </Container>
)
