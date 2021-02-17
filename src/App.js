import React from 'react'
import * as ROUTES from './constans/routes'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, Signin } from './pages';
import Signup from './pages/signup';
import browse from './pages/browse';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}></Route>
        <Route exact path={ROUTES.SIGN_IN} component={Signin}></Route>
        <Route exact path={ROUTES.SIGN_UP} component={Signup}></Route>
        <Route exact path={ROUTES.BROWSE} component={browse}></Route>
      </Switch>
    </Router>
  )
}

export default App;
