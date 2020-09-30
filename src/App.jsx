import React from 'react'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragment from './components/basics/Fragment'
import Random from './components/basics/Random'

export default () => (
  <>
    <h1>React Fundamentals</h1>
    <Random min={0} max={100}/>
    <Fragment />
    <WithParams title='Student 1 Situation' student='X' note={9.0} />
    <WithParams title='Student 2 Situation' student='Y' note={7}/>
    <WithParams title='Student 3 Situation' student='Z' note={4.7} />
    <First />
  </>
)
