import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Subtitle } from "./members"
import { Muted } from "./digex-2019"

const Container = styled.div`
  display: grid;
  width: 85%;
  margin: 30px auto;

  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Archive" />
    <Subtitle>Gallery</Subtitle>
    <Muted>
      These images are sourced from{" "}
      <a href="https://instagram.com/digexsociety" target="_blank">
        our Instagram page.
      </a>
    </Muted>
    <Container>
      {data.allInstaNode.edges.map(({ node }) => (
        <img src={node.localFile.childImageSharp.fixed.src} />
      ))}
    </Container>
  </Layout>
)

export default GalleryPage

export const query = graphql`
  query {
    allInstaNode {
      edges {
        node {
          localFile {
            childImageSharp {
              fixed(width: 300, height: 300, cropFocus: WEST) {
                src
              }
            }
          }
        }
      }
    }
  }
`
