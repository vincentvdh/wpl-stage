import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

const AboutPage = ({data: {wpPage:{aboutPageFields}}}) => {
  const image = getImage(aboutPageFields.imageOfMe.localFile)
  return (
    <Layout pageTitle="About Us">
      <div>
      <h1>{aboutPageFields.title}</h1>
      <p>{aboutPageFields.smallDescription}</p>
      </div>
      <div>
      <h2>{aboutPageFields.titleIntroduction}</h2>
      <p>{aboutPageFields.introduction}</p>
      <GatsbyImage
          image={image}
          alt={aboutPageFields.imageOfMe.altText}
        />
      </div>
      <div>
      <h2 >{aboutPageFields.titleCompany}</h2>
      <p>{aboutPageFields.company}</p>
      </div>
      <div>
      <h2>{aboutPageFields.titleWhat}</h2>
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
      smallDescription
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