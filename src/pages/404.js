import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 :(</h1>
    <p>What you're looking for doesn't seem to exist.</p>
  </Layout>
)

export default NotFoundPage
