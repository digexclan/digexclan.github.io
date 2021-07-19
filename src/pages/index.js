import React from "react"
import { navigate } from "@reach/router"
import styled from "styled-components"
import { Animated } from "react-animated-css"

import { FaChevronCircleRight as Chevron } from "react-icons/fa"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Sponsors from "../components/Home/sponsors"
import Know from "../components/Home/know"

import photoSession from "../images/photo-session.png"

import HiResResults from "../Hi-Res Results.pdf"
const Landing = styled.div`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 50% 50%;
  grid-column-gap: 2rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-rows: 50% 50%;
    grid-template-columns: 100%;
    min-height: 90vh;
  }
`

const Box = styled.div`
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`

const BigT = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-top: 7rem;

  @media screen and (max-width: 760px) {
    font-size: 50px;
    margin-top: 0;
  }
`

const SubT = styled.div`
  font-weight: 500;
  color: #7d7c7c;
  font-size: 20px;
`

const LearnMore = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-around;
  align-items: center;
  padding: 18px 40px;
  background: #3f3d56;
  color: #fff;
  font-weight: 500;
  width: fit-content;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease-in-out;
  margin-right: 10px;
  &:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: translateY(-1px);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing>
      <Animated animationIn="bounceInLeft">
        <Box>
          <BigT>Change your lens, {"\n"}change your story.</BigT>
          <SubT>
            The photography and filmmaking club at Delhi Public School, R.K.
            Puram.
          </SubT>
          <div style={{ display: "flex" }}>
            <LearnMore onClick={() => navigate("/digex-2021")}>
              <div>Digex 2021</div>
              <div
                style={{ transform: "translateY(2.5px)", marginLeft: "10px" }}
              >
                <Chevron size="1.3rem" />
              </div>
            </LearnMore>
            <a href={require("../RESULTS_DIGEX21_1.pdf")} style={{textDecoration:"none"}} rel="noopener noreferrer">
            <LearnMore>
              <div>Digex 2021 Results</div>
              <div
                style={{ transform: "translateY(2.5px)", marginLeft: "10px" }}
              >
                <Chevron size="1.3rem" />
              </div>
            </LearnMore>
            </a>
            {/* <LearnMore onClick={() => navigate("/winners")}>
              <div>Winners</div>
              <div
                style={{ transform: "translateY(2.5px)", marginLeft: "10px" }}
              >
                <Chevron size="1.3rem" />
              </div>
            </LearnMore> */}
          </div>
        </Box>
      </Animated>
      <Animated animationIn="bounceInRight">
        <Box>
          <img
            style={{ userSelect: "none" }}
            style={{ transform: "translateY(20px)" }}
            src={photoSession}
          />
        </Box>
      </Animated>
    </Landing>
    <Sponsors />
    <Know />
  </Layout>
)

export default IndexPage
