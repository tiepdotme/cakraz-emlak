import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Advert from '../Advert'
import Stack from '../Stack'
import Title from '../Title'

const SearchResults = ({ type, location, setShowResults }) => {
  const data = useStaticQuery(graphql`
    {
      adverts: allStrapiAdvert {
        edges {
          node {
            ...Advert
          }
        }
      }
    }
  `)

  const [filteredAdverts, setFilteredAdverts] = useState([])

  useEffect(() => {
    setFilteredAdverts([])

    data.adverts.edges.forEach(edge => {
      if (edge.node.location === location && edge.node.type === type) {
        setFilteredAdverts(prevState => [...prevState, edge])
      }
      if (type === 'default' || location === 'default') {
        setShowResults(false)
      }
    })
  }, [data.adverts.edges, location, type, setShowResults])

  return (
    <div style={{ marginBottom: 150 }}>
      <Title>Arama Sonuçları</Title>
      <Stack>
        {filteredAdverts.map(edge => (
          <Advert key={edge.node.id} advertData={edge.node} />
        ))}
      </Stack>
    </div>
  )
}

export default SearchResults
