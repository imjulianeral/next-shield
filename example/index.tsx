import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { NextShield } from '../.'

const App = () => {
  return (
    <div>
      <NextShield />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
