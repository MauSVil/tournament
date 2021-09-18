import React, { useEffect } from 'react';
import StyleProvider from './Providers/ThemeProvider';
import { Provider } from 'react-redux'
import Routes from './Routes';
import './App.css'
import store from './redux/store'

function App() {

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
