import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import { title, myimage, myself, mytext,afstand } from './about.module.css'

const AboutPage = ({ data: { wpPage: { aboutPageFields } } }) => {
  const image = getImage(aboutPageFields.imageOfMe.localFile)
  return (
    <Layout pageTitle="Over de stage">
      <div>
        <h1 className={title}>{aboutPageFields.title}</h1>
      </div>
      <div className={afstand}>
        <h2 className={title}>{aboutPageFields.titleIntroduction}</h2>
        <div className={myself}>
          <p className={mytext}>{aboutPageFields.introduction}</p>
          <GatsbyImage
            className={myimage}
            image={image}
            alt={aboutPageFields.imageOfMe.altText}
          />
        </div>
      </div>
      <div className={afstand}>
      <a href="https://www.amotek.be" ><h2 className={title}>{aboutPageFields.titleCompany}</h2></a> 
        <p>{aboutPageFields.company}</p>
        
      </div>
      <div className={afstand}>
        <h2 className={title}>{aboutPageFields.titleWhat}</h2>
        <p>{aboutPageFields.what}</p>
      </div>

    </Layout>
  )
}


export const query = graphql`
query{
  wpPage {
    aboutPageFields {
      title
      titleIntroduction
      introduction
      imageOfMe {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      titleCompany
      company
      titleWhat
      what
    }
  }
}

`

export default AboutPage