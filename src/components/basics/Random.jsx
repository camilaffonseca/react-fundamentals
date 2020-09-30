import React from 'react'

const Random = ({ min, max }) => {
  const randomInt = parseInt(Math.random() * (max - min)) + min

  return (
    <>
      <h2>Random number: {randomInt}</h2>
      <p>MIN: {min}</p>
      <p>MAX: {max}</p>
    </>
  )
}

Random.defaultProps = {
    max: 0,
    min: 0
}

export default Random
