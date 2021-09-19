import React from 'react';
import StyleProvider from './Providers/ThemeProvider';
import SocketProvider from './Providers/SocketProvider';
import { Provider } from 'react-redux'
import Routes from './Routes';
import './App.css'
import store from './redux/store'

function App() {

  return (
    <Provider store={store}>
      <StyleProvider>
        <SocketProvider>
          <div className="App">
            <Routes />
          </div>
        </SocketProvider>
      </StyleProvider>
    </Provider>
  );
}

export default App;
