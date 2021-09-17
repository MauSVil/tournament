import React, { useEffect } from 'react';
import StyleProvider from './Providers/ThemeProvider';
import { Provider } from 'react-redux'
import Routes from './Routes';
import './App.css'
import store from './redux/store'
import io from "socket.io-client";

const socket = io('http://localhost:7000');

function App() {

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('userData')
    const parsedUserData = JSON.parse(userData)
    if (token) {
      socket.emit('userLoggedIn', parsedUserData)
    }
  }, [])

  return (
    <Provider store={store}>
      <StyleProvider>
        <div className="App">
          <Routes />
        </div>
      </StyleProvider>
    </Provider>
  );
}

export default App;
