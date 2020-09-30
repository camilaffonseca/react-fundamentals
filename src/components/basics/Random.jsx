import React from 'react'

const Random = ({ min, max }) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min

  return <h2>Random number: {randomInt}</h2>
}

Random.defaultProps = {
    max: 0,
    min: 0
}

export default Random
