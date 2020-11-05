import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Subtitle } from "./members"
import { Muted } from "./digex-2019"

import ImgsViewer from 'react-images-viewer'

import Gallery from '../components/Gallery'


const Container = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

`

const GalleryPage = ({ data }) => (
  <Layout>
    <SEO title="Gallery" />
    <Subtitle>Gallery</Subtitle>
    <Muted>
      These images are sourced from{" "}
      <a href="https://instagram.com/digexsociety" target="_blank">
        our Instagram page.
      </a>
    </Muted>
    <Container>
     
      <Gallery
      
      imgs={data.allInstaNode.edges.map(({ node }) => ({
        src: node.original,
        thumbnail: node.localFile.childImageSharp.fixed.src,
        useForDemo:true,
        orientation:"source",
      }))}
    />
    </Container>
  </Layout>
)

export default GalleryPage

export const query = graphql`
  query {
  allInstaNode {
    edges {
      node {
        original
        caption
        localFile {
          childImageSharp {
            fixed(width: 300, height: 300,cropFocus: WEST) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
