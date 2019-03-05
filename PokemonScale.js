import React from 'react'
import { Image } from 'mdx-deck'
import styled from 'styled-components'

const PartialImage = styled.div([], {
  overflow: 'hidden',
  backgroundImage: 'url("images/pokemon-blue.jpg")',
  backgroundPosition: 'left center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}, props => props.css)

const Container = styled.div([], {
  position: 'absolute',
  top: '2rem',
  display: 'flex',
  flexWrap: 'wrap',
  width: '500px'
}, props => props.css)

export const PokemonScale = ({ weight, size = 100 }) => {
  const percentage = size * (weight % 1)
  const fullImageArr = Array(Math.floor(weight)).fill()

  return <Container>
    {fullImageArr.map((_, i) =>
      <Image
        key={i}
        width={size}
        height={size}
        src="images/pokemon-blue.jpg"
        size="contain"
      />
    )}
    <PartialImage css={{ width: percentage + 'px', height: size + 'px' }} />
  </Container>
}  