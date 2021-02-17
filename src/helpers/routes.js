import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route {...rest}
      render={() => {
        if (!user) {
          return children;
        }
        return (<Redirect
          to={{ pathname: loggedInPath }} />)
      }}
    />
  )
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route {...rest}
      render={({ location }) => {
        if (user) {
          return children;
        }
        return (
          <Redirect to={{
            pathname: '/signin',
            state: { from: location },
          }} />
        )
      }} />
  )
}