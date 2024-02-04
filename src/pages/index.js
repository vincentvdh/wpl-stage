import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import {
  title,
  kader,
  textss,
  date
} from './index.module.css'

const IndexPage = ({data: {wpPage: {homePageFields}, allWpBericht: {edges} }}) => {
  const last = edges[0]
  return (
    <main>
      <Layout pageTitle="Home">
      <div>
        <h1 className={title}>{homePageFields.titelss}</h1>
        <p>{homePageFields.smallDescription}</p>
      </div>
      <div className={kader}>
        <h2 className={title}>{last.node.berichtenFields.title}</h2>
        <p className={textss}>{last.node.berichtenFields.description}</p>
        <p className={date}>{last.node.berichtenFields.date}</p>
      </div>
      </Layout>
    </main>
  )
}



   
      







export const query =graphql`
query{
  wpPage (slug: {eq: "home"}, homePageFields: {}) {
    homePageFields {
      titelss
      smallDescription
    }
  }
  allWpBericht {
    edges {
      node {
        berichtenFields {
          title
          description
          date
        }
      }
    }
  }
}
`

export default IndexPage