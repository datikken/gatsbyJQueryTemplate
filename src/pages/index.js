import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/main.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/page-2/">Text block</Link>
  </Layout>
)

export default IndexPage