import React from 'react'
// credit to https://github.com/mateusloubach/portfolio/blob/main/src/components/RotatingText/index.tsx
interface RotatingTextProps {
  items: string[]
}

const RotatingText: React.FC<RotatingTextProps> = ({ items }) => {
  var ReactRotatingText = require('react-rotating-text')
  return (
      <ReactRotatingText items={[...items]} />
  )
}

export default RotatingText
