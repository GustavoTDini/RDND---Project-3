import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// Component to Protect the area
const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => {
  return (<Route
      {...rest}
      render={(props) => (
          isAuthed
          ? <Component {...props} />
          : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
      )}
  />)
}

export default PrivateRoute;