import React from "react"
import Layout from "../components/layout"
//Components
import TextBlock from '../components/text_block/text_block';
import JoinGame from '../components/joinGame/joinGame';

import '../styles/main.scss';

const SecondPage = () => (
  <Layout>
    <TextBlock/>
    <JoinGame/>
  </Layout>
)

export default SecondPage
