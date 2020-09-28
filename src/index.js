import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import First from './components/basics/First'
import WithParams from './components/basics/WithParams'

ReactDOM.render(
  <div>
    <First />
    <WithParams title='Student 1 Situation' student='X' note={9.0}/>
    <WithParams title='Student 2 Situation' student='Y' note={2.0}/>
    <WithParams title='Student 3 Situation' student='Z' note={7.0}/>
  </div>,
  document.getElementById('root'),
)
