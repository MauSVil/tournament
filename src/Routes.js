import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header/Header'
import Tournaments from './pages/Tournaments'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/tournaments">
          <Tournaments />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;