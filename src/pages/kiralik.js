import React from 'react'
import { graphql } from 'gatsby'
import Title from '../components/Title'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Advert from '../components/Advert'
import Error from '../components/Error'
import Stack from '../components/Stack'

const RentPage = ({ data }) => {
  return (
    <Layout>
      <Container>
        <Title>Kiralık</Title>
        <Stack>
          {data.allStrapiAdvert.edges.length > 0 ? data.allStrapiAdvert.edges.map(advert => {
            return <Advert key={advert.node.id} advertData={advert.node} />
          }): <Error content="Yakında tekrar kontrol edin" title="Hiç kiralık ilan yok" />}
        </Stack>
      </Container>
    </Layout>
  )
}

export default RentPage

export const query = graphql`
  {
    allStrapiAdvert(filter: { type: { eq: "kiralik" } }) {
      edges {
        node {
          created_at
          id
          price
          type
          title
          slug
          location
          thumbnail {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
