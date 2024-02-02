import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  kader,
  textss,
  date

} from './index.module.css'

const BerichtenPage = ({ data: { allWpBericht: { edges } } }) => {

  return (
    <main>
      <Layout pageTitle="Blog pagina">
        <h1>Blog pagina</h1>
        <p>Hier kan u de wekelijkse updates terugvinden.</p>
        <div >
          {edges.map((item) => {
            const bericht = item.node.berichtenFields;
            const slug = item.node.slug
            return (
              
                <Link className= {textss}to={`/berichten/${slug}`}>
                  <div className={kader}>
                    <h2 key={item.node.id}>{bericht.title}</h2>
                    <p key={item.node.id}>{bericht.description}</p>
                    <p className={date}key={item.node.id}>{bericht.date}</p>
                  </div>

                </Link>
              
            )
          }
          )}

        </div>
      </Layout>
    </main>
  )
}


export const query = graphql`
query{
  wpPage (slug: {eq: "berichten"}, blogPageFields: {}) {
    blogPageFields {
      titles
      smallDescription
    }
  }
  allWpBericht {
    edges {
      node {
        id
        slug
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




export default BerichtenPage







