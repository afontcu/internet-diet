import React from 'react'
import { Image } from 'mdx-deck'

const random = (min, max) => Math.floor(Math.random() * max) + min

export const RandomiTunesLogo = ({ size }) => {
  const idx = random(1, 2)

  return <Image
    src={`images/itunes-${idx}.png`}
    width={size}
    height={size}
  />
}