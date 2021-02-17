import React from 'react'
import * as ROUTES from './constans/routes'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Browse, Home, Signin } from './pages';
import Signup from './pages/signup';
import IsUserRedirect, { ProtectedRoute } from './helpers/routes';

function App() {
  const user = '';
  return (
    <Router>
      <Switch>
        {/* <Route exact path={ROUTES.HOME} component={Home}></Route> */}
        <IsUserRedirect user={user}
          loggedInPath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>

        <IsUserRedirect user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
          exact
        >{<Signin />}</IsUserRedirect>

        <IsUserRedirect user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
          exact
        >{<Signup />}</IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
          <Browse />
        </ProtectedRoute>
        {/* <Route exact path={ROUTES.SIGN_IN} component={Signin}></Route> */}
        {/* <Route exact path={ROUTES.SIGN_UP} component={Signup}></Route> */}
        {/* <Route exact path={ROUTES.BROWSE} component={browse}></Route> */}
      </Switch>
    </Router>
  )
}

export default App;
