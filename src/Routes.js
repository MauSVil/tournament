import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Header from './components/Header/Header'
import Tournaments from './pages/Tournaments'
import Tournament from './pages/Tournament';
import './Routes.css'
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const Routes = () => {
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [])

  return (
    <Router>
      <div className="mainArea-container">
        <Header />
        <div className="mainArea-routes">
          <div className="mainArea-wrapper">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/tournaments">
                <Tournaments />
              </Route>
              <Route path="/tournament/:id">
                <Tournament />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  )
}

export default Routes;