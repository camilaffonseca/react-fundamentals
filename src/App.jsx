import React from 'react'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'
import Fragment from './components/basics/Fragment'

export default () => (
  <>
    <h1>React Fundamentals</h1>
    <Fragment />
    <WithParams title='Student 1 Situation' student='X' note={9.0} />
    <WithParams title='Student 2 Situation' student='Y' note={2.0} />
    <WithParams title='Student 3 Situation' student='Z' note={7.0} />
    <First />
  </>
)
