import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TextBlock from '../components/text_block/text_block';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TextBlock/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage