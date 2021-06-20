import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;