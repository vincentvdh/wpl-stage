import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  title,
  kader,
  textss,
  date

} from './index.module.css'



const BerichtPage = ({data:{wpBericht: {berichtenFields:bericht}}}) => {
    return (
        <Layout pageTitle="Bericht pagina">
            <div className={kader}>
                <h2 className={title}>{bericht.title}</h2>
                <p className={textss}>{bericht.description}</p>
                <p className={date}>{bericht.date}</p>
            </div>

        </Layout>
    )
}





export const query = graphql`
  query ($id: String) {
    
        wpBericht(id: {eq: $id}) {
          berichtenFields {
            title
            description
            date
          }
        }
    }`

export default BerichtPage