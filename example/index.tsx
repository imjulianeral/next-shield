import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { NextShield } from '../.'

const App = () => {
  return (
    <div>
      <NextShield<['/profile', '/dashboard', '/control-panel'], ['/', '/login']>
        publicRoutes={['/', '/login']}
        privateRoutes={['/profile', '/dashboard', '/control-panel']}
        loginRoute="/login"
        RBAC={{
          ADMIN: {
            grantedRoutes: ['/dashboard', '/control-panel'],
            accessRoute: '/dashboard',
          },
          USER: {
            grantedRoutes: ['/profile', '/dashboard'],
            accessRoute: '/profile',
          },
        }}
        userRole=""
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
