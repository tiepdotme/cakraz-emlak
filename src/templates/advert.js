import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Carousel from '../components/Carousel'

const AdvertTemplate = ({ data }) => (
  <Layout title={data.strapiAdvert.title}>
    <Container>
      {data.strapiAdvert.images.length > 0 && (
        <Carousel images={data.strapiAdvert.images} />
      )}
      <h1>{data.strapiAdvert.title}</h1>
    </Container>
  </Layout>
)

export default AdvertTemplate

export const query = graphql`
  query AdvertTemplate($id: String!) {
    strapiAdvert(id: { eq: $id }) {
      id
      slug
      title
      description
      location
      price
      type
      roomcount
      size
      buildage
      floorcount
      floorcurrent
      bathcount
      furnished
      incomplex
      heating
      images {
        imageFile {
          childImageSharp {
            fluid(maxWidth: 1340) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
