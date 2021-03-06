import React from 'react'

import Card from './components/layout/Card'
import FamilyMember from './components/basics/FamilyMember'
import Family from './components/basics/Family'
import Random from './components/basics/Random'
import Fragment from './components/basics/Fragment'
import WithParams from './components/basics/WithParams'
import First from './components/basics/First'

import './App.css'

const App = () => (
  <div className='App'>
    <h1>React Fundamentals</h1>

    <div className='Cards'>
      <Card title='#05 - Component With Children'>
        <Family surname='surname'>
          <FamilyMember name='Name 1' />
          <FamilyMember name='Name 2' />
          <FamilyMember name='Name 3' />
        </Family>
      </Card>

      <Card title='#04 - Random Challenge'>
        <Random min={0} max={100} />
      </Card>

      <Card title='#03 - Fragment Component'>
        <Fragment />
      </Card>

      <Card title='#02 - WithParams Component'>
        <WithParams title='Student 1 Situation' student='X' note={9.0} />
        <WithParams title='Student 2 Situation' student='Y' note={4.1} />
      </Card>

      <Card title='#01 - First Component'>
        <First />
      </Card>
    </div>
  </div>
)

export default App
