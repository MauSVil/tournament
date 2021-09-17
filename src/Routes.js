import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Home from './pages/Home'
import Header from './components/Header/Header'
import NotificationsModal from './components/NotificationsModal/NotificationsModal';
import NotificationsComponent from './components/NotificationsComponent/NotificationsComponent';
import Tournaments from './pages/Tournaments'
import Tournament from './pages/Tournament';
import './Routes.css'
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { setResponse as setResponseAction } from './redux/actions/ui';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Routes = (props) => {
  const { response, setResponse } = props;

  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [])

  const handleClose = () => {
    setResponse({ data: null, error: null, action: null })
  }

  return (
    <Router>
      <div className="mainArea-container">
        <Header />
        <div className="mainArea-routes">
          <div className="mainArea-wrapper">
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              open={response.action}
              autoHideDuration={3000}
              message={response.action}
              key="topCenter"
              onClose={handleClose}
            >
              <Alert
                severity={response.data ? 'success' : 'error'}
                onClose={handleClose}
              >
                {response.action}
              </Alert>
            </Snackbar>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/tournaments">
                <Tournaments />
              </Route>
              {/* <Route path="/tournament/:id">
                <Tournament />
              </Route>
              <Route path="/signUp">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route> */}
            </Switch>
          </div>
          <NotificationsComponent />
          <NotificationsModal />
        </div>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    response: state.ui.response
  }
}

const mapDispatchToProps = {
  setResponse: setResponseAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);